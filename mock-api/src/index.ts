import express from "express";
import cors from "cors";
import { networks } from "./data/networks.js";
import { protocols } from "./data/protocols.js";
import { strategies } from "./data/strategies.js";
import { tokens } from "./data/tokens.js";

const app = express();
const PORT = process.env.PORT || 4200;

app.use(cors({ origin: "*" }));
app.use(express.json());

// Health check
app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// GET /v1/networks
app.get("/v1/networks", (_req, res) => {
  res.json({ data: networks });
});

// GET /v1/protocols
app.get("/v1/protocols", (_req, res) => {
  res.json({ data: protocols });
});

// GET /v1/strategies
app.get("/v1/strategies", (_req, res) => {
  res.json({ data: strategies });
});

// GET /v1/strategies/live - Fetch live APY/TVL from DeFi Llama
app.get("/v1/strategies/live", async (_req, res) => {
  try {
    const response = await fetch("https://yields.llama.fi/pools");
    const data = (await response.json()) as {
      data: Array<{
        project: string;
        chain: string;
        symbol: string;
        pool: string;
        apy: number;
        tvlUsd: number;
        apyBase: number;
        apyReward: number;
      }>;
    };

    const pools = data.data.filter(
      (pool) =>
        pool.project === "aave-v3" &&
        pool.chain === "Base" &&
        (pool.symbol === "USDC" || pool.symbol === "WETH")
    );

    const liveStrategies = strategies.map((strategy) => {
      const symbol = strategy.denomination.toUpperCase();
      const pool = pools.find((p) => p.symbol === symbol);
      return {
        slug: strategy.slug,
        name: strategy.name,
        apy: pool?.apy ?? strategy.apy,
        tvl: pool?.tvlUsd ?? strategy.tvl,
        apyBase: pool?.apyBase ?? strategy.apy,
        apyReward: pool?.apyReward ?? 0,
        defiLlamaPool: pool?.pool ?? null,
      };
    });

    res.json({ data: liveStrategies });
  } catch (error) {
    // Fallback to static data on fetch failure
    res.json({
      data: strategies.map((s) => ({
        slug: s.slug,
        name: s.name,
        apy: s.apy,
        tvl: s.tvl,
        apyBase: s.apy,
        apyReward: 0,
        defiLlamaPool: null,
      })),
    });
  }
});

// GET /v1/tokens
app.get("/v1/tokens", (_req, res) => {
  res.json({ data: tokens });
});

// GET /v1/users/balance/:address
app.get("/v1/users/balance/:address", (req, res) => {
  const { address } = req.params;
  res.json({
    data: {
      [address]: {
        address,
        tokens: [
          {
            address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
            symbol: "USDC",
            decimals: 6,
            balance: "15234560000",
            balanceFormatted: "15234.56",
            valueUsd: 15234.56,
            network: "base-mainnet",
          },
          {
            address: "0x4200000000000000000000000000000000000006",
            symbol: "WETH",
            decimals: 18,
            balance: "2500000000000000000",
            balanceFormatted: "2.5",
            valueUsd: 7500.0,
            network: "base-mainnet",
          },
        ],
        totalValue: 22734.56,
        errors: [],
        totalUsd: 22734.56,
        account: address,
      },
    },
  });
});

app.listen(PORT, () => {
  console.log(`Mock API server running on http://localhost:${PORT}`);
  console.log(`Endpoints:`);
  console.log(`  GET /v1/networks`);
  console.log(`  GET /v1/protocols`);
  console.log(`  GET /v1/strategies`);
  console.log(`  GET /v1/strategies/live`);
  console.log(`  GET /v1/tokens`);
  console.log(`  GET /v1/users/balance/:address`);
});
