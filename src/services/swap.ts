import {
  ICustomContractCall,
  getAllTransactionRequests,
} from "@astrolabs/swapper";
import { erc20Abi } from "abitype/abis";
import toast from "react-hot-toast";
import { PublicClient, encodeFunctionData } from "viem";
import { Operation } from "~/model/operation";

import { tokensIsEqual } from "~/utils";
import { overrideZeroAddress } from "~/utils/format";
import { getSwapperStore } from "./swapper";
import { executeTransaction } from "./transaction";
import { getAccount } from "wagmi/actions";
import { getWagmiConfig } from "./web3";
import { ActionInteraction } from "~/store/swapper";
import { store } from "~/store";
import { emmitStep } from "./operation";

// Aave V3 Pool ABI (supply + withdraw only)
const AaveV3PoolABI = [
  {
    name: "supply",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      { name: "asset", type: "address" },
      { name: "amount", type: "uint256" },
      { name: "onBehalfOf", type: "address" },
      { name: "referralCode", type: "uint16" },
    ],
    outputs: [],
  },
  {
    name: "withdraw",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      { name: "asset", type: "address" },
      { name: "amount", type: "uint256" },
      { name: "to", type: "address" },
    ],
    outputs: [{ name: "", type: "uint256" }],
  },
] as const;

// Aave V3 Pool address on Base
const AAVE_V3_POOL = "0xA238Dd80C259a72e81d7e4664a9801593F98d1c5";

export const depositCallData = (
  asset: string,
  amount: string,
  onBehalfOf: string
) => {
  return encodeFunctionData({
    abi: AaveV3PoolABI,
    functionName: "supply",
    args: [
      asset as `0x${string}`,
      BigInt(amount),
      onBehalfOf as `0x${string}`,
      0,
    ],
  });
};

export const withdrawCallData = (
  asset: string,
  amount: string,
  to: string
) => {
  return encodeFunctionData({
    abi: AaveV3PoolABI,
    functionName: "withdraw",
    args: [asset as `0x${string}`, BigInt(amount), to as `0x${string}`],
  });
};

export const approvalCallData = (spender: string, amount: string) => {
  return encodeFunctionData({
    abi: erc20Abi,
    functionName: "approve",
    args: [spender as `0x${string}`, BigInt(amount)],
  });
};

export const getSwapRoute = async (_value?: number) => {
  const { address } = getAccount(getWagmiConfig());
  const swapperStore = getSwapperStore();
  const interaction = swapperStore.interaction;
  const { from: basefrom, to: baseTo, value } = swapperStore[interaction];
  const from = "asset" in basefrom ? basefrom.asset : basefrom;
  const to = "asset" in baseTo ? baseTo.asset : baseTo;
  const amount = BigInt(Math.round((_value ?? value) * from.weiPerUnit));
  if (tokensIsEqual(from, to)) {
    return [
      {
        to: address,
        data: "0x00",
        estimatedExchangeRate: 1, // 1:1 exchange rate
        estimatedOutputWei: amount,
        estimatedOutput: Number(amount) / from.weiPerUnit,
      },
    ];
  }
  const customContractCalls: ICustomContractCall[] = [];
  const slippage = 0.1;
  if (interaction === ActionInteraction.DEPOSIT) {
    const amountNumber = Number(amount);

    // Approve the Aave V3 Pool to spend the asset token
    const approval = approvalCallData(AAVE_V3_POOL, amountNumber.toString());

    customContractCalls.push({
      toAddress: to.address,
      callData: approval,
      inputPos: 1,
      gasLimit: "200000",
    });

    // Call supply() on Aave V3 Pool
    const callData = depositCallData(
      to.address,
      amountNumber.toString(),
      address!
    );

    customContractCalls.push({
      toAddress: AAVE_V3_POOL,
      callData,
      inputPos: 0,
      gasLimit: "350000",
    });
  }

  const quoteOpts: any = {
    aggregatorId: ["SQUID"],
    inputChainId: from.network.id,
    input: overrideZeroAddress(from.address),
    amountWei: amount,
    outputChainId: to.network.id,
    output: overrideZeroAddress(to.address),
    maxSlippage: slippage * 1000,
    payer: address,
    customContractCalls: customContractCalls.length
      ? customContractCalls
      : undefined,
  };

  if (customContractCalls.length) {
    quoteOpts.postHook = [
      {
        toAddress: AAVE_V3_POOL,
        callData: customContractCalls[customContractCalls.length - 1].callData,
      },
    ];
  }

  return getAllTransactionRequests(quoteOpts);
};

export { AaveV3PoolABI, AAVE_V3_POOL };

export const generateCallData = ({
  functionName,
  args,
  abi = erc20Abi,
}: {
  functionName: any;
  abi: any;
  args: any[];
}) => {
  return encodeFunctionData({
    abi,
    functionName,
    args,
  });
};

export const executeSwap = async (
  operation: Operation,
  _publicClient: PublicClient
) => {
  const tr = { ...operation.estimation.request };
  if (!tr) return;
  if (tr.maxFeePerGas) delete tr.maxFeePerGas;
  if (tr.maxPriorityFeePerGas) delete tr.maxPriorityFeePerGas;

  const hash = await executeTransaction(tr);

  console.log("lifiExplorer: ", `https://explorer.li.fi/tx/${hash}`);
  console.log("squidExplorer: ", `https://axelarscan.io/gmp/${hash}`);

  const swapPending = _publicClient.waitForTransactionReceipt({
    hash: hash,
  });
  toast.promise(swapPending, {
    loading: "Swap transaction is pending...",
    success: "Swap transaction successful",
    error: "Swap reverted rejected",
  });

  emmitStep({
    operationId: operation.id,
    promise: swapPending,
    txHash: hash,
  });

  store.dispatch({
    type: "operations/emmitStep",
    payload: {},
  });
  await swapPending;
  return hash;
};
