import { OperationStep } from "~/model/operation";
import { ActionInteraction } from "~/store/swapper";
import { Estimation, Strategy } from "../interfaces";

/**
 * Preview Aave V3 supply/withdraw — 1:1 exchange rate.
 * Aave aTokens accrue interest via rebasing, so supply/withdraw is always 1:1
 * in terms of the underlying asset amount.
 */
export const previewStrategyTokenMove = async ({
  strategy,
  interaction,
  value,
}: PreviewStrategyMoveProps): Promise<Estimation> => {
  const weiPerUnit =
    interaction === ActionInteraction.DEPOSIT
      ? strategy.asset.weiPerUnit
      : strategy.weiPerUnit;

  const amount = BigInt(Math.round(value * weiPerUnit));

  // Aave V3: 1:1 supply/withdraw (aTokens rebase)
  const previewAmount = amount;

  const fromToken: any =
    interaction === ActionInteraction.DEPOSIT ? strategy.asset : strategy;
  const toToken: any =
    interaction === ActionInteraction.DEPOSIT ? strategy : strategy.asset;

  const step: OperationStep = {
    type: interaction,
    tool: "radyal",
    fromChain: strategy.network.id,
    toChain: strategy.network.id,
    estimate: {
      fromAmount: amount.toString(),
      toAmount: previewAmount.toString(),
    },
    fromToken,
    toToken,
  };

  const estimation =
    Number(previewAmount) /
    (interaction === ActionInteraction.DEPOSIT
      ? strategy.weiPerUnit
      : strategy.asset.weiPerUnit);

  return {
    id: window.crypto.randomUUID(),
    estimation,
    steps: [step],
    request: null,
  };
};

interface PreviewStrategyMoveProps {
  strategy: Strategy;
  interaction: ActionInteraction;
  value: number;
}
