import { useCallback } from "react";
import { useAccount, useContractRead, usePublicClient } from "wagmi";
import { useSwitchNetwork } from "./transaction";

import toast from "react-hot-toast";

import { getWalletClient } from "@wagmi/core";
import { erc20Abi } from "abitype/abis";
import { useSelector, useStore } from "react-redux";

import { Operation, OperationStatus, OperationStep } from "~/model/operation";

import { getAccount, getPublicClient } from "wagmi/actions";
import { closeModal, openModal } from "~/services/modal";
import { addOperation, emmitStep, updateOperation } from "~/services/operation";
import { getInteractionNeedToSwap, getSwapperStore } from "~/services/swapper";
import { AaveV3PoolABI, AAVE_V3_POOL } from "~/services/swap";
import { approve } from "~/services/transaction";
import { networkToWagmiChain } from "~/utils/format";
import { getWagmiConfig } from "~/services/web3";
import { IRootState } from "~/store";
import {
  createGrouppedStrategiesSelector,
  selectedStrategyGroupSelector,
  selectedStrategySelector,
  strategiesNetworksSelector,
  strategyBySlugSelector,
} from "~/store/selectors/strategies";

export const useStrategiesStore = () => {
  return useSelector((state: IRootState) => state.strategies);
};

export const useStrategies = () => {
  return useSelector((state: IRootState) => state.strategies.list);
};
export const useStrategiesBalances = () => {
  return useSelector(
    (state: IRootState) => state.strategies.strategiesBalances
  );
};
export const useSelectedStrategy = () => {
  return useSelector(selectedStrategySelector);
};
export const useStrategyBySlug = () => {
  return useSelector(strategyBySlugSelector);
};
export const useGrouppedStrategies = (filtered = true) => {
  const selector = createGrouppedStrategiesSelector(filtered);
  return useSelector(selector);
};

export const useSelectedStrategyGroup = () => {
  return useSelector(selectedStrategyGroupSelector);
};

export const useStrategiesNetworks = () => {
  return useSelector(strategiesNetworksSelector);
};

export const useMaxRedeem = () => {
  const strategy = useSelectedStrategy();
  const { network } = strategy;
  const { address } = useAccount();

  // Read user's aToken balance (ERC20 balanceOf) as max redeemable amount
  return useContractRead({
    abi: erc20Abi,
    address: strategy.address,
    chainId: network.id,
    functionName: "balanceOf",
    args: [address!],
  })?.data;
};

export const useDeposit = () => {
  const strategy = useSelectedStrategy();
  const { network } = strategy;
  const switchNetwork = useSwitchNetwork(network.id);
  const { address } = useAccount();

  return useCallback(
    async (amount: bigint) => {
      await switchNetwork();
      try {
        const walletClient = await getWalletClient(getWagmiConfig(), {
          chainId: network.id,
        });
        // Call Aave V3 Pool supply(asset, amount, onBehalfOf, referralCode)
        return await walletClient.writeContract({
          address: AAVE_V3_POOL as `0x${string}`,
          abi: AaveV3PoolABI,
          functionName: "supply",
          args: [strategy.asset.address!, amount, address!, 0],
          chain: networkToWagmiChain(network) as any,
          account: address!,
        });
      } catch (e) {
        console.error(e);
      }
    },
    [address, network.id, strategy.asset.address, switchNetwork]
  );
};

export const useWithdraw = () => {
  const strategy = useSelectedStrategy();
  const { network } = strategy;
  const publicClient = usePublicClient({
    chainId: network?.id,
  });
  const { address } = useAccount();
  return useCallback(
    async (value: number): Promise<Operation> => {
      const state = getSwapperStore();
      const interaction = state.interaction;
      const { from, to, estimatedRoute } = state[interaction];
      const amount = BigInt(Math.round(value * from.weiPerUnit));

      const operation = new Operation({
        id: window.crypto.randomUUID(),
        fromToken: from,
        toToken: to,
        steps: estimatedRoute.steps.map((step) => {
          return {
            ...step,
            status: OperationStatus.WAITING,
          } as OperationStep;
        }),
        estimation: estimatedRoute,
      });
      addOperation(operation);

      // Call Aave V3 Pool withdraw(asset, amount, to)
      const walletClient = await getWalletClient(getWagmiConfig(), {
        chainId: network.id,
      });
      const hash = await walletClient.writeContract({
        address: AAVE_V3_POOL as `0x${string}`,
        abi: AaveV3PoolABI,
        functionName: "withdraw",
        args: [strategy.asset.address!, amount, address!],
        chain: networkToWagmiChain(network) as any,
        account: address!,
      });

      updateOperation({
        id: operation.id,
        payload: {
          status: OperationStatus.PENDING,
        },
      });
      const withdrawPending = publicClient.waitForTransactionReceipt({
        hash,
      });

      toast.promise(withdrawPending, {
        loading: "Withdraw is pending...",
        success: "Withdraw transaction successful",
        error: "Withdraw reverted",
      });
      emmitStep({
        operationId: operation.id,
        promise: withdrawPending,
        txHash: hash,
      });
      if (!getInteractionNeedToSwap()) {
        updateOperation({
          id: operation.id,
          payload: {
            status: OperationStatus.DONE,
            txHash: hash,
          },
        });
      }
      await withdrawPending;
      return operation;
    },
    [address, publicClient, network.id, strategy.asset.address]
  );
};

export const useApproveAndDeposit = () => {
  const deposit = useDeposit();

  const store = useStore();
  return useCallback(
    async (value: number) => {
      const state = getSwapperStore();
      const interaction = state.interaction;
      const { from, to, estimatedRoute } = state[interaction];

      const amount = BigInt(value * from.weiPerUnit);
      const publicClient = getPublicClient(getWagmiConfig(), {
        chainId: from.network.id,
      });

      const _tx = new Operation({
        id: window.crypto.randomUUID(),
        status: OperationStatus.PENDING,
        steps: estimatedRoute.steps.map((step) => {
          return {
            ...step,
            status: OperationStatus.PENDING,
          } as OperationStep;
        }),
        estimation: estimatedRoute,
      });

      openModal({ modal: "steps", title: "TX TRACKER" });

      try {
        if ((estimatedRoute.steps[0] as any).type === "approve") {
          const approveHash = await approve({
            spender: from.address,
            address: getAccount(getWagmiConfig()).address,
            amount,
            chainId: from.network.id,
          });

          const approvePending = publicClient.waitForTransactionReceipt({
            hash: approveHash,
          });
          store.dispatch({
            type: "operations/add",
            payload: _tx,
          });
          toast.promise(approvePending, {
            loading: "Approve is pending...",
            success: "Approve transaction successful",
            error: "approve reverted rejected 🤯",
          });

          await approvePending;

          emmitStep({
            operationId: _tx.id,
          });
        }
        const depositHash = (await deposit(amount)) as `0x${string}`;

        const depositPending = publicClient.waitForTransactionReceipt({
          hash: depositHash,
        });
        toast.promise(depositPending, {
          loading: "Deposit is pending...",
          success: "Deposit transaction successful",
          error: "deposit reverted rejected 🤯",
        });
        await depositPending;
        store.dispatch({
          type: "operations/update",
          payload: {
            id: _tx.id,
            payload: {
              txHash: depositHash,
              status: OperationStatus.DONE,
              steps: _tx.steps.map((step) => {
                return {
                  ...step,
                  status: OperationStatus.DONE,
                };
              }),
            },
          },
        });
      } catch (e) {
        closeModal();
        console.error(e);
        toast.error("An error has occured");
      }
    },
    [approve, deposit, emmitStep, openModal, store]
  );
};
