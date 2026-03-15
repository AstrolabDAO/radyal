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
            address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            symbol: "USDC",
            decimals: 6,
            balance: "15234560000",
            balanceFormatted: "15234.56",
            valueUsd: 15234.56,
            network: "ethereum-mainnet",
          },
          {
            address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            symbol: "WETH",
            decimals: 18,
            balance: "2500000000000000000",
            balanceFormatted: "2.5",
            valueUsd: 7500.0,
            network: "ethereum-mainnet",
          },
          {
            address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
            symbol: "WBTC",
            decimals: 8,
            balance: "15000000",
            balanceFormatted: "0.15",
            valueUsd: 9750.0,
            network: "ethereum-mainnet",
          },
        ],
        totalValue: 32484.56,
        errors: [],
        totalUsd: 32484.56,
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
  console.log(`  GET /v1/tokens`);
  console.log(`  GET /v1/users/balance/:address`);
});
