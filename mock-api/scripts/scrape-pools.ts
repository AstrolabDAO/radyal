/**
 * Scrape real DeFi pool data from DeFiLlama and generate mock API data
 */

const CHAIN_MAP: Record<string, { slug: string; id: number }> = {
  'Ethereum': { slug: 'ethereum-mainnet', id: 1 },
  'Polygon': { slug: 'polygon-mainnet', id: 137 },
  'Arbitrum': { slug: 'arbitrum-mainnet-one', id: 42161 },
  'Optimism': { slug: 'optimism-mainnet', id: 10 },
  'Base': { slug: 'base-mainnet', id: 8453 },
  'Avalanche': { slug: 'avalanche-mainnet', id: 43114 },
  'BSC': { slug: 'bnb-chain-mainnet', id: 56 },
  'Scroll': { slug: 'scroll-mainnet', id: 534352 },
  'Linea': { slug: 'linea-mainnet', id: 59144 },
  'zkSync Era': { slug: 'zksync-era-mainnet', id: 324 },
  'Fantom': { slug: 'fantom-mainnet-opera', id: 250 },
};

const TARGET_PROTOCOLS = [
  'aave-v3', 'lido', 'compound-v3', 'curve-dex', 'convex-finance',
  'uniswap-v3', 'sushiswap', 'balancer-v2', 'yearn-finance', 'morpho',
  'stargate', 'gmx', 'pendle', 'maker', 'rocket-pool', 'eigenlayer',
  'ethena', 'spark', 'venus', 'pancakeswap-amm-v3',
];

const PROTOCOL_NAMES: Record<string, string> = {
  'aave-v3': 'Aave V3', 'lido': 'Lido', 'compound-v3': 'Compound V3',
  'curve-dex': 'Curve', 'convex-finance': 'Convex', 'uniswap-v3': 'Uniswap V3',
  'sushiswap': 'SushiSwap', 'balancer-v2': 'Balancer', 'yearn-finance': 'Yearn',
  'morpho': 'Morpho', 'stargate': 'Stargate', 'gmx': 'GMX', 'pendle': 'Pendle',
  'maker': 'MakerDAO', 'rocket-pool': 'Rocket Pool', 'eigenlayer': 'EigenLayer',
  'ethena': 'Ethena', 'spark': 'Spark', 'venus': 'Venus',
  'pancakeswap-amm-v3': 'PancakeSwap V3',
};

// Token denomination mapping
const DENOM_MAP: Record<string, string> = {
  'USDC': 'usdc', 'USDT': 'usdt', 'DAI': 'dai', 'WETH': 'weth', 'WBTC': 'wbtc',
  'ETH': 'weth', 'STETH': 'weth', 'WSTETH': 'weth', 'WEETH': 'weth',
  'FRAX': 'usdc', 'LUSD': 'usdc', 'SUSD': 'usdc', 'GHO': 'usdc',
  'CBETH': 'weth', 'RETH': 'weth', 'SFRXETH': 'weth',
};

function getDenomination(symbol: string): string {
  const parts = symbol.split('-');
  for (const part of parts) {
    const upper = part.toUpperCase();
    if (DENOM_MAP[upper]) return DENOM_MAP[upper];
  }
  if (symbol.toLowerCase().includes('eth')) return 'weth';
  if (symbol.toLowerCase().includes('btc')) return 'wbtc';
  return 'usdc';
}

function makeAddress(index: number): string {
  return `0x${(index + 1000).toString(16).padStart(40, '0')}`;
}

async function main() {
  console.log('Fetching DeFiLlama pools...');
  const res = await fetch('https://yields.llama.fi/pools');
  const { data } = await res.json() as { data: any[] };

  // Filter — max 5 per protocol for diversity
  const allFiltered = data
    .filter(p =>
      CHAIN_MAP[p.chain] &&
      TARGET_PROTOCOLS.includes(p.project) &&
      p.tvlUsd > 500000 &&
      p.apy !== null && p.apy !== undefined
    )
    .sort((a, b) => (b.tvlUsd || 0) - (a.tvlUsd || 0));

  const byProto: Record<string, any[]> = {};
  for (const p of allFiltered) {
    if (!byProto[p.project]) byProto[p.project] = [];
    if (byProto[p.project].length < 5) byProto[p.project].push(p);
  }
  const filtered = Object.values(byProto).flat()
    .sort((a, b) => (b.tvlUsd || 0) - (a.tvlUsd || 0))
    .slice(0, 50);

  console.log(`Selected ${filtered.length} pools from ${new Set(filtered.map(p => p.project)).size} protocols`);

  // Generate strategies
  const strategies = filtered.map((pool, i) => {
    const chain = CHAIN_MAP[pool.chain];
    const protocolName = PROTOCOL_NAMES[pool.project] || pool.project;
    const symbol = pool.symbol.replace(/[^a-zA-Z0-9\-\/]/g, '');
    const name = `${protocolName} ${symbol}`;
    const slug = `as:${pool.project}-${symbol.toLowerCase().replace(/[\/\s]/g, '-')}-${chain.slug.split('-')[0]}`;
    const denomination = getDenomination(pool.symbol);
    const decimals = denomination === 'wbtc' ? 8 : denomination === 'usdc' || denomination === 'usdt' ? 6 : 18;

    return {
      name,
      slug,
      symbol: `as${symbol.slice(0, 8)}`,
      description: `${protocolName} ${symbol} strategy on ${pool.chain}`,
      shortDescription: `${protocolName} yield on ${pool.chain}`,
      nativeAddress: makeAddress(i),
      nativeNetwork: chain.slug,
      denomination,
      decimals,
      scale: decimals,
      weiPerUnit: 10 ** decimals,
      id: chain.id * 1000 + i,
      apy: Math.round((pool.apy || 0) * 100) / 100,
      tvl: pool.tvlUsd,
      protocols: [pool.project],
      rewardTokens: pool.rewardTokens || [],
      status: 'active',
      color1: '#627EEA',
      color2: '#3C3C3D',
      exposureNetworks: [chain.slug],
      types: pool.project.includes('dex') || pool.project.includes('swap') ? ['liquidity-providing'] : ['lending'],
      fees: { entry: 0, exit: 0, mgmt: 0.5, perf: 10 },
      limits: { minDeposit: 0.01, minWithdrawal: 0.01, maxDeposit: 1000000, maxSlippage: 1 },
      valuable: {
        initial: { date: '2024-01-15T00:00:00.000Z', sharePrice: 1.0, volume: 0, ror: 0, exposureByNetwork: null, exposureByProtocol: null, exposureByNetworkByProtocol: null },
        last: {
          date: new Date().toISOString(),
          sharePrice: 1 + (pool.apy || 0) / 100 * 0.5,
          investedApyDaily: pool.apy || 0,
          investedApyWeekly: (pool.apy || 0) * 7,
          volume: pool.tvlUsd * 0.1,
          ror: (pool.apy || 0) / 100 * 0.5,
          exposureByNetwork: null, exposureByProtocol: null, exposureByNetworkByProtocol: null,
        },
        denomination,
        dateStart: Date.now() - 365 * 24 * 60 * 60 * 1000,
        dateStop: Date.now(),
      },
      scoring: {
        value: 7.5, weight: 1, description: 'Overall score',
        safety: { value: 8, weight: 0.3, description: 'Audit score' },
        profitability: { value: 7, weight: 0.3, description: 'Returns' },
        scalability: { value: 7.5, weight: 0.2, description: 'Capacity', _id: 'sc' },
        liquidity: { value: 7.5, weight: 0.2, description: 'Liquidity', _id: 'lq' },
      },
      blocky: {
        seed: slug, seedArr: [1,2,3,4],
        theme: { name: 'default', primary: '#627EEA', secondary: '#3C3C3D', bg: ['#1a1b2e'], fg: ['#fff'], shadow: ['#000'], overlay: ['rgba(0,0,0,0.5)'], palette: ['#627EEA'], primaryPalette: ['#627EEA'], success: '#00D395', warning: '#F0B90B', error: '#FF4444', notice: '#00A3FF', info: '#627EEA', debug: '#888', bgSuccess: '#003322', bgWarning: '#332200', bgError: '#330011', bgDebug: '#222', bgNotice: '#002233', bgInfo: '#001133' },
        size: 8, scale: 4, color: '#627EEA', bgColor: '#1a1b2e', spotColor: '#B6509E', canvas: null, ctx: null, dataUrl: '', rendered: false,
      },
      _id: `strat_${i}`, isLastRevision: true, revision: 1, createdBy: 'system', updatedBy: 'system',
      descriptionSlides: [], landing: '', docs: '', codebase: '', app: '', twitter: '', blog: '', discord: '', email: '', telegram: '', contract: '', token: '',
      isDummy: false, nonNativeAddresses: [], standards: [], explorer: '',
      hexId: `0x${chain.id.toString(16)}`, lzId: 0, lzEndpoint: '', coinGeckoId: '', coinMarketCapId: '', defiLlamaId: pool.pool,
      exponentialId: '', defiSafetyId: '', solityId: '',
      shortAddress: makeAddress(i).slice(0, 10) + '...',
      chainlinkId: '', addressCount: 0, issuancePrice: 1, markPrice: 1, issuanceSupply: 0, supply: 0, maxSupply: 0,
      lockedSupply: 0, circulatingSupply: 0, marketCap: 0, dilutedMarketCap: 0,
      buyEnabled: true, sellEnabled: true, buyTax: 0, sellTax: 0, minBuy: 0, maxBuy: 0, minSell: 0, maxSell: 0,
      aggregationLevel: 1,
      deDotFiInfo: null, coinGeckoInfo: null, exponentialInfo: null, contracts: {},
      createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
    };
  });

  // Also scrape tokens
  const tokenSlugs = new Set<string>();
  strategies.forEach(s => tokenSlugs.add(s.denomination));
  
  const tokens = [
    { symbol: 'USDC', slug: 'usdc', decimals: 6, coinGeckoId: 'usd-coin', networks: ['ethereum-mainnet','polygon-mainnet','arbitrum-mainnet-one','optimism-mainnet','base-mainnet'] },
    { symbol: 'USDT', slug: 'usdt', decimals: 6, coinGeckoId: 'tether', networks: ['ethereum-mainnet','polygon-mainnet','arbitrum-mainnet-one','optimism-mainnet'] },
    { symbol: 'DAI', slug: 'dai', decimals: 18, coinGeckoId: 'dai', networks: ['ethereum-mainnet','polygon-mainnet','arbitrum-mainnet-one','optimism-mainnet'] },
    { symbol: 'WETH', slug: 'weth', decimals: 18, coinGeckoId: 'weth', networks: ['ethereum-mainnet','polygon-mainnet','arbitrum-mainnet-one','optimism-mainnet','base-mainnet'] },
    { symbol: 'WBTC', slug: 'wbtc', decimals: 8, coinGeckoId: 'wrapped-bitcoin', networks: ['ethereum-mainnet','polygon-mainnet','arbitrum-mainnet-one'] },
    { symbol: 'stETH', slug: 'steth', decimals: 18, coinGeckoId: 'staked-ether', networks: ['ethereum-mainnet'] },
    { symbol: 'wstETH', slug: 'wsteth', decimals: 18, coinGeckoId: 'wrapped-steth', networks: ['ethereum-mainnet','arbitrum-mainnet-one','optimism-mainnet','base-mainnet'] },
    { symbol: 'FRAX', slug: 'frax', decimals: 18, coinGeckoId: 'frax', networks: ['ethereum-mainnet','arbitrum-mainnet-one'] },
    { symbol: 'GHO', slug: 'gho', decimals: 18, coinGeckoId: 'gho', networks: ['ethereum-mainnet'] },
    { symbol: 'UNI', slug: 'uni', decimals: 18, coinGeckoId: 'uniswap', networks: ['ethereum-mainnet'] },
    { symbol: 'AAVE', slug: 'aave', decimals: 18, coinGeckoId: 'aave', networks: ['ethereum-mainnet'] },
    { symbol: 'CRV', slug: 'crv', decimals: 18, coinGeckoId: 'curve-dao-token', networks: ['ethereum-mainnet'] },
    { symbol: 'SUSHI', slug: 'sushi', decimals: 18, coinGeckoId: 'sushi', networks: ['ethereum-mainnet'] },
  ].flatMap(t => t.networks.map((net, i) => ({
    _id: `token_${t.slug}_${net}`,
    name: t.symbol,
    symbol: t.symbol,
    slug: t.slug,
    scale: t.decimals,
    decimals: t.decimals,
    weiPerUnit: 10 ** t.decimals,
    coinGeckoId: t.coinGeckoId,
    nativeAddress: `0x${'a'.repeat(36)}${t.decimals.toString(16).padStart(4,'0')}`,
    nativeNetwork: net,
    logoURI: `/images/tokens/${t.symbol.toLowerCase()}.svg`,
    icon: `/images/tokens/${t.symbol.toLowerCase()}.svg`,
    status: 'active',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })));

  // Write strategies
  const strategiesTs = `const now = new Date().toISOString();\n\nexport const strategies = ${JSON.stringify(strategies, null, 2)};\n`;
  await Bun.write('./mock-api/src/data/strategies.ts', strategiesTs);
  
  // Write tokens  
  const tokensTs = `export const tokens = ${JSON.stringify(tokens, null, 2)};\n`;
  await Bun.write('./mock-api/src/data/tokens.ts', tokensTs);

  console.log(`\nGenerated:`);
  console.log(`  ${strategies.length} strategies from ${new Set(strategies.map(s => s.protocols[0])).size} protocols`);
  console.log(`  ${tokens.length} tokens`);
  
  // Stats
  const byChain: Record<string, number> = {};
  strategies.forEach(s => { byChain[s.nativeNetwork] = (byChain[s.nativeNetwork] || 0) + 1 });
  console.log(`\nBy chain:`);
  Object.entries(byChain).sort((a,b) => b[1] - a[1]).forEach(([chain, count]) => {
    console.log(`  ${chain}: ${count}`);
  });
  
  const byProtocol: Record<string, number> = {};
  strategies.forEach(s => { byProtocol[s.protocols[0]] = (byProtocol[s.protocols[0]] || 0) + 1 });
  console.log(`\nBy protocol:`);
  Object.entries(byProtocol).sort((a,b) => b[1] - a[1]).forEach(([proto, count]) => {
    console.log(`  ${PROTOCOL_NAMES[proto] || proto}: ${count}`);
  });
}

main().catch(console.error);
