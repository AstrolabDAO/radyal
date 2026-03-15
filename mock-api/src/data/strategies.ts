const now = new Date().toISOString();

export const strategies = [
  {
    "name": "Lido STETH",
    "slug": "as:lido-steth-ethereum",
    "symbol": "asSTETH",
    "description": "Lido STETH strategy on Ethereum",
    "shortDescription": "Lido yield on Ethereum",
    "nativeAddress": "0x0000D0a23F5f72830535050AD7c7C368D42eAAA2",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "weth",
    "decimals": 18,
    "scale": 18,
    "weiPerUnit": 1000000000000000000,
    "id": 1000,
    "apy": 2.37,
    "tvl": 19670038738,
    "protocols": [
      "lido"
    ],
    "rewardTokens": [],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "lending"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.01186,
        "investedApyDaily": 2.372,
        "investedApyWeekly": 16.604,
        "volume": 1967003873.8000002,
        "ror": 0.011859999999999999,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "weth",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:lido-steth-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_0",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "747c1d2a-c668-4682-b9f9-296708a3dd90",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x0000D0a2...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Rocket Pool RETH",
    "slug": "as:rocket-pool-reth-ethereum",
    "symbol": "asRETH",
    "description": "Rocket Pool RETH strategy on Ethereum",
    "shortDescription": "Rocket Pool yield on Ethereum",
    "nativeAddress": "0x0000A25fC00B269C705F9edFD9F0385f5848AAA4",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "weth",
    "decimals": 18,
    "scale": 18,
    "weiPerUnit": 1000000000000000000,
    "id": 1005,
    "apy": 1.97,
    "tvl": 2894946020,
    "protocols": [
      "rocket-pool"
    ],
    "rewardTokens": [],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "lending"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.0098257,
        "investedApyDaily": 1.96514,
        "investedApyWeekly": 13.755980000000001,
        "volume": 289494602,
        "ror": 0.0098257,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "weth",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:rocket-pool-reth-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_5",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "d4b3c522-6127-4b89-bedf-83641cdcd2eb",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x0000A25f...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Aave V3 USDT",
    "slug": "as:aave-v3-usdt-ethereum",
    "symbol": "asUSDT",
    "description": "Aave V3 USDT strategy on Ethereum",
    "shortDescription": "Aave V3 yield on Ethereum",
    "nativeAddress": "0x0000A7E215cDca647946B29554108C2A330FAAA4",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "usdt",
    "decimals": 6,
    "scale": 6,
    "weiPerUnit": 1000000,
    "id": 1007,
    "apy": 1.71,
    "tvl": 1806150388,
    "protocols": [
      "aave"
    ],
    "rewardTokens": [],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "lending"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.00855155,
        "investedApyDaily": 1.71031,
        "investedApyWeekly": 11.97217,
        "volume": 180615038.8,
        "ror": 0.00855155,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "usdt",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:aave-v3-usdt-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_7",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "f981a304-bb6c-45b8-b0c5-fd2f515ad23a",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x0000A7E2...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Curve CRVUSD-CBBTC",
    "slug": "as:curve-dex-crvusd-cbbtc-ethereum",
    "symbol": "asCRVUSD-C",
    "description": "Curve CRVUSD-CBBTC strategy on Ethereum",
    "shortDescription": "Curve yield on Ethereum",
    "nativeAddress": "0x00000000000000000000000000000000000003f3",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "wbtc",
    "decimals": 8,
    "scale": 8,
    "weiPerUnit": 100000000,
    "id": 1011,
    "apy": 0.14,
    "tvl": 182231507,
    "protocols": [
      "curve"
    ],
    "rewardTokens": [],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "liquidity-providing"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.0007,
        "investedApyDaily": 0.14,
        "investedApyWeekly": 0.9800000000000001,
        "volume": 18223150.7,
        "ror": 0.0007000000000000001,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "wbtc",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:curve-dex-crvusd-cbbtc-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_11",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "f8971721-005b-4a8f-b743-584a30d362a9",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Compound V3 USDC",
    "slug": "as:compound-v3-usdc-ethereum",
    "symbol": "asUSDC",
    "description": "Compound V3 USDC strategy on Ethereum",
    "shortDescription": "Compound V3 yield on Ethereum",
    "nativeAddress": "0x00000000000000000000000000000000000003f6",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "usdc",
    "decimals": 6,
    "scale": 6,
    "weiPerUnit": 1000000,
    "id": 1014,
    "apy": 2.42,
    "tvl": 145475502,
    "protocols": [
      "compound"
    ],
    "rewardTokens": [
      "0xc00e94Cb662C3520282E6f5717214004A7f26888"
    ],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "lending"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.01212425,
        "investedApyDaily": 2.42485,
        "investedApyWeekly": 16.973950000000002,
        "volume": 14547550.200000001,
        "ror": 0.012124250000000001,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "usdc",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:compound-v3-usdc-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_14",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "7da72d09-56ca-4ec5-a45f-59114353e487",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Uniswap V3 USDC-WETH",
    "slug": "as:uniswap-v3-usdc-weth-ethereum",
    "symbol": "asUSDC-WET",
    "description": "Uniswap V3 USDC-WETH strategy on Ethereum",
    "shortDescription": "Uniswap V3 yield on Ethereum",
    "nativeAddress": "0x00000000000000000000000000000000000003fa",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "usdc",
    "decimals": 6,
    "scale": 6,
    "weiPerUnit": 1000000,
    "id": 1018,
    "apy": 16.31,
    "tvl": 96573951,
    "protocols": [
      "uniswap"
    ],
    "rewardTokens": [],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "liquidity-providing"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.0815348,
        "investedApyDaily": 16.30696,
        "investedApyWeekly": 114.14872,
        "volume": 9657395.1,
        "ror": 0.0815348,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "usdc",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:uniswap-v3-usdc-weth-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_18",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "665dc8bc-c79d-4800-97f7-304bf368e547",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Curve CRVUSD-TBTC",
    "slug": "as:curve-dex-crvusd-tbtc-ethereum",
    "symbol": "asCRVUSD-T",
    "description": "Curve CRVUSD-TBTC strategy on Ethereum",
    "shortDescription": "Curve yield on Ethereum",
    "nativeAddress": "0x00000000000000000000000000000000000003fc",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "wbtc",
    "decimals": 8,
    "scale": 8,
    "weiPerUnit": 100000000,
    "id": 1020,
    "apy": 0.12,
    "tvl": 93223629,
    "protocols": [
      "curve"
    ],
    "rewardTokens": [],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "liquidity-providing"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.0006,
        "investedApyDaily": 0.12,
        "investedApyWeekly": 0.84,
        "volume": 9322362.9,
        "ror": 0.0006,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "wbtc",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:curve-dex-crvusd-tbtc-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_20",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "0208091c-ac2f-4918-9807-82c721142905",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Uniswap V3 WETH-USDC",
    "slug": "as:uniswap-v3-weth-usdc-base",
    "symbol": "asWETH-USD",
    "description": "Uniswap V3 WETH-USDC strategy on Base",
    "shortDescription": "Uniswap V3 yield on Base",
    "nativeAddress": "0x00000000000000000000000000000000000003fd",
    "nativeNetwork": "base-mainnet",
    "denomination": "weth",
    "decimals": 18,
    "scale": 18,
    "weiPerUnit": 1000000000000000000,
    "id": 8453021,
    "apy": 42.22,
    "tvl": 85717032,
    "protocols": [
      "uniswap"
    ],
    "rewardTokens": [],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "base-mainnet"
    ],
    "types": [
      "liquidity-providing"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.21109915,
        "investedApyDaily": 42.21983,
        "investedApyWeekly": 295.53881,
        "volume": 8571703.200000001,
        "ror": 0.21109915,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "weth",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:uniswap-v3-weth-usdc-base",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_21",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x2105",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "b99bcdf5-1350-4269-981e-0e9b5cccb007",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Convex FRAX-USDE",
    "slug": "as:convex-finance-frax-usde-ethereum",
    "symbol": "asFRAX-USD",
    "description": "Convex FRAX-USDE strategy on Ethereum",
    "shortDescription": "Convex yield on Ethereum",
    "nativeAddress": "0x0000000000000000000000000000000000000400",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "usdc",
    "decimals": 6,
    "scale": 6,
    "weiPerUnit": 1000000,
    "id": 1024,
    "apy": 1.35,
    "tvl": 74795697,
    "protocols": [
      "convex-finance"
    ],
    "rewardTokens": [
      "0xd533a949740bb3306d119cc777fa900ba034cd52",
      "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b"
    ],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "lending"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.006733,
        "investedApyDaily": 1.3466,
        "investedApyWeekly": 9.4262,
        "volume": 7479569.7,
        "ror": 0.006733,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "usdc",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:convex-finance-frax-usde-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_24",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "5fac4a47-5360-49b7-8b61-66f88a3d939f",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Uniswap V3 WETH-USDT",
    "slug": "as:uniswap-v3-weth-usdt-ethereum",
    "symbol": "asWETH-USD",
    "description": "Uniswap V3 WETH-USDT strategy on Ethereum",
    "shortDescription": "Uniswap V3 yield on Ethereum",
    "nativeAddress": "0x0000000000000000000000000000000000000401",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "weth",
    "decimals": 18,
    "scale": 18,
    "weiPerUnit": 1000000000000000000,
    "id": 1025,
    "apy": 13.86,
    "tvl": 65071024,
    "protocols": [
      "uniswap"
    ],
    "rewardTokens": [],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "liquidity-providing"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.069297,
        "investedApyDaily": 13.8594,
        "investedApyWeekly": 97.01580000000001,
        "volume": 6507102.4,
        "ror": 0.069297,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "weth",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:uniswap-v3-weth-usdt-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_25",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "fc9f488e-8183-416f-a61e-4e5c571d4395",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Uniswap V3 WBTC-WETH",
    "slug": "as:uniswap-v3-wbtc-weth-arbitrum",
    "symbol": "asWBTC-WET",
    "description": "Uniswap V3 WBTC-WETH strategy on Arbitrum",
    "shortDescription": "Uniswap V3 yield on Arbitrum",
    "nativeAddress": "0x0000000000000000000000000000000000000402",
    "nativeNetwork": "arbitrum-mainnet-one",
    "denomination": "wbtc",
    "decimals": 8,
    "scale": 8,
    "weiPerUnit": 100000000,
    "id": 42161026,
    "apy": 9.54,
    "tvl": 58860471,
    "protocols": [
      "uniswap"
    ],
    "rewardTokens": [],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "arbitrum-mainnet-one"
    ],
    "types": [
      "liquidity-providing"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.04771695,
        "investedApyDaily": 9.54339,
        "investedApyWeekly": 66.80373,
        "volume": 5886047.100000001,
        "ror": 0.04771695,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "wbtc",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:uniswap-v3-wbtc-weth-arbitrum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_26",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0xa4b1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "bb7e9353-129f-4e01-b822-f4250d0abb8a",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Convex DOLA-SUSDE",
    "slug": "as:convex-finance-dola-susde-ethereum",
    "symbol": "asDOLA-SUS",
    "description": "Convex DOLA-SUSDE strategy on Ethereum",
    "shortDescription": "Convex yield on Ethereum",
    "nativeAddress": "0x0000000000000000000000000000000000000403",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "usdc",
    "decimals": 6,
    "scale": 6,
    "weiPerUnit": 1000000,
    "id": 1027,
    "apy": 1.12,
    "tvl": 54598839,
    "protocols": [
      "convex-finance"
    ],
    "rewardTokens": [
      "0xd533a949740bb3306d119cc777fa900ba034cd52",
      "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b",
      "0xA153B9dFE150098cFeAfb9288f3657D09fC39663"
    ],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "lending"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.0055869,
        "investedApyDaily": 1.11738,
        "investedApyWeekly": 7.8216600000000005,
        "volume": 5459883.9,
        "ror": 0.0055869000000000005,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "usdc",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:convex-finance-dola-susde-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_27",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "85407c01-6f16-4cef-9ef2-1b2bf2556183",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Uniswap V3 WETH-USDC",
    "slug": "as:uniswap-v3-weth-usdc-arbitrum",
    "symbol": "asWETH-USD",
    "description": "Uniswap V3 WETH-USDC strategy on Arbitrum",
    "shortDescription": "Uniswap V3 yield on Arbitrum",
    "nativeAddress": "0x0000000000000000000000000000000000000404",
    "nativeNetwork": "arbitrum-mainnet-one",
    "denomination": "weth",
    "decimals": 18,
    "scale": 18,
    "weiPerUnit": 1000000000000000000,
    "id": 42161028,
    "apy": 14.79,
    "tvl": 51994280,
    "protocols": [
      "uniswap"
    ],
    "rewardTokens": [],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "arbitrum-mainnet-one"
    ],
    "types": [
      "liquidity-providing"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.07397165,
        "investedApyDaily": 14.79433,
        "investedApyWeekly": 103.56031,
        "volume": 5199428,
        "ror": 0.07397165,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "weth",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:uniswap-v3-weth-usdc-arbitrum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_28",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0xa4b1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "a14bd201-764c-40a5-86b8-2928b2461232",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Convex ETH-STETH",
    "slug": "as:convex-finance-eth-steth-ethereum",
    "symbol": "asETH-STET",
    "description": "Convex ETH-STETH strategy on Ethereum",
    "shortDescription": "Convex yield on Ethereum",
    "nativeAddress": "0x0000000000000000000000000000000000000405",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "weth",
    "decimals": 18,
    "scale": 18,
    "weiPerUnit": 1000000000000000000,
    "id": 1029,
    "apy": 1.88,
    "tvl": 50334609,
    "protocols": [
      "convex-finance"
    ],
    "rewardTokens": [
      "0xd533a949740bb3306d119cc777fa900ba034cd52",
      "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b",
      "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",
      "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0"
    ],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "lending"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.0094071,
        "investedApyDaily": 1.88142,
        "investedApyWeekly": 13.16994,
        "volume": 5033460.9,
        "ror": 0.0094071,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "weth",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:convex-finance-eth-steth-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_29",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "5ce23e7e-3800-4c9c-ad30-6db3db0515a1",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Pendle SNUSD",
    "slug": "as:pendle-snusd-ethereum",
    "symbol": "asSNUSD",
    "description": "Pendle SNUSD strategy on Ethereum",
    "shortDescription": "Pendle yield on Ethereum",
    "nativeAddress": "0x0000000000000000000000000000000000000406",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "usdc",
    "decimals": 6,
    "scale": 6,
    "weiPerUnit": 1000000,
    "id": 1030,
    "apy": 7.51,
    "tvl": 45480834,
    "protocols": [
      "pendle-finance"
    ],
    "rewardTokens": [],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "lending"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.0375583,
        "investedApyDaily": 7.51166,
        "investedApyWeekly": 52.58162,
        "volume": 4548083.4,
        "ror": 0.0375583,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "usdc",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:pendle-snusd-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_30",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "0f38d9a4-8e34-4abc-b9ba-25f326ef7828",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Pendle SNUSD",
    "slug": "as:pendle-snusd-ethereum",
    "symbol": "asSNUSD",
    "description": "Pendle SNUSD strategy on Ethereum",
    "shortDescription": "Pendle yield on Ethereum",
    "nativeAddress": "0x0000000000000000000000000000000000000407",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "usdc",
    "decimals": 6,
    "scale": 6,
    "weiPerUnit": 1000000,
    "id": 1031,
    "apy": 9.64,
    "tvl": 45480834,
    "protocols": [
      "pendle-finance"
    ],
    "rewardTokens": [
      "0x808507121b80c02388fad14726482e061b8da827"
    ],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "lending"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.04822355,
        "investedApyDaily": 9.64471,
        "investedApyWeekly": 67.51297,
        "volume": 4548083.4,
        "ror": 0.04822355,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "usdc",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:pendle-snusd-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_31",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "a064d3a0-e0b0-42c2-8992-1358c950bc6d",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Convex CVXCRV",
    "slug": "as:convex-finance-cvxcrv-ethereum",
    "symbol": "asCVXCRV",
    "description": "Convex CVXCRV strategy on Ethereum",
    "shortDescription": "Convex yield on Ethereum",
    "nativeAddress": "0x0000000000000000000000000000000000000408",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "usdc",
    "decimals": 6,
    "scale": 6,
    "weiPerUnit": 1000000,
    "id": 1032,
    "apy": 10.8,
    "tvl": 37182402,
    "protocols": [
      "convex-finance"
    ],
    "rewardTokens": [
      "0xd533a949740bb3306d119cc777fa900ba034cd52",
      "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b",
      "0xf939e0a03fb07f59a73314e73794be0e57ac1b4e"
    ],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "lending"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.054,
        "investedApyDaily": 10.8,
        "investedApyWeekly": 75.60000000000001,
        "volume": 3718240.2,
        "ror": 0.054000000000000006,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "usdc",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:convex-finance-cvxcrv-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_32",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "ef32dd3b-a03b-4f79-9b65-8420d7e04ad0",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Yearn USDC",
    "slug": "as:yearn-finance-usdc-ethereum",
    "symbol": "asUSDC",
    "description": "Yearn USDC strategy on Ethereum",
    "shortDescription": "Yearn yield on Ethereum",
    "nativeAddress": "0x000000000000000000000000000000000000040a",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "usdc",
    "decimals": 6,
    "scale": 6,
    "weiPerUnit": 1000000,
    "id": 1034,
    "apy": 2.36,
    "tvl": 31787002,
    "protocols": [
      "yearn-finance"
    ],
    "rewardTokens": [],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "lending"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.01179655,
        "investedApyDaily": 2.35931,
        "investedApyWeekly": 16.515169999999998,
        "volume": 3178700.2,
        "ror": 0.01179655,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "usdc",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:yearn-finance-usdc-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_34",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "7d89af7a-24c9-4292-aa38-7c71b05fbd6d",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Pendle USDG",
    "slug": "as:pendle-usdg-ethereum",
    "symbol": "asUSDG",
    "description": "Pendle USDG strategy on Ethereum",
    "shortDescription": "Pendle yield on Ethereum",
    "nativeAddress": "0x000000000000000000000000000000000000040b",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "usdc",
    "decimals": 6,
    "scale": 6,
    "weiPerUnit": 1000000,
    "id": 1035,
    "apy": 5.24,
    "tvl": 31486540,
    "protocols": [
      "pendle-finance"
    ],
    "rewardTokens": [],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "lending"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.0261878,
        "investedApyDaily": 5.23756,
        "investedApyWeekly": 36.66292,
        "volume": 3148654,
        "ror": 0.0261878,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "usdc",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:pendle-usdg-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_35",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "8bc218ed-faf1-41e9-a636-2989e9f7e805",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Pendle USDG",
    "slug": "as:pendle-usdg-ethereum",
    "symbol": "asUSDG",
    "description": "Pendle USDG strategy on Ethereum",
    "shortDescription": "Pendle yield on Ethereum",
    "nativeAddress": "0x000000000000000000000000000000000000040c",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "usdc",
    "decimals": 6,
    "scale": 6,
    "weiPerUnit": 1000000,
    "id": 1036,
    "apy": 8.71,
    "tvl": 31486540,
    "protocols": [
      "pendle-finance"
    ],
    "rewardTokens": [
      "0x808507121b80c02388fad14726482e061b8da827"
    ],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "lending"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.04354085,
        "investedApyDaily": 8.70817,
        "investedApyWeekly": 60.957190000000004,
        "volume": 3148654,
        "ror": 0.043540850000000006,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "usdc",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:pendle-usdg-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_36",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "6b7abf76-a216-4386-8e3f-873e663214ca",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Balancer WSTETH-AAVE",
    "slug": "as:balancer-v2-wsteth-aave-ethereum",
    "symbol": "asWSTETH-A",
    "description": "Balancer WSTETH-AAVE strategy on Ethereum",
    "shortDescription": "Balancer yield on Ethereum",
    "nativeAddress": "0x000000000000000000000000000000000000040d",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "weth",
    "decimals": 18,
    "scale": 18,
    "weiPerUnit": 1000000000000000000,
    "id": 1037,
    "apy": 0.32,
    "tvl": 25270814,
    "protocols": [
      "balancer"
    ],
    "rewardTokens": [],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "lending"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.00162005,
        "investedApyDaily": 0.32401,
        "investedApyWeekly": 2.2680700000000003,
        "volume": 2527081.4000000004,
        "ror": 0.00162005,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "weth",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:balancer-v2-wsteth-aave-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_37",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "201e5f6e-cf75-4d0e-b07f-d58da3cee23a",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Pendle SUSDE",
    "slug": "as:pendle-susde-ethereum",
    "symbol": "asSUSDE",
    "description": "Pendle SUSDE strategy on Ethereum",
    "shortDescription": "Pendle yield on Ethereum",
    "nativeAddress": "0x000000000000000000000000000000000000040e",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "usdc",
    "decimals": 6,
    "scale": 6,
    "weiPerUnit": 1000000,
    "id": 1038,
    "apy": 3.69,
    "tvl": 24897905,
    "protocols": [
      "pendle-finance"
    ],
    "rewardTokens": [],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "lending"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.01846095,
        "investedApyDaily": 3.69219,
        "investedApyWeekly": 25.84533,
        "volume": 2489790.5,
        "ror": 0.01846095,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "usdc",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:pendle-susde-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_38",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "e2fa0a1c-91bc-4653-b165-5005a8327402",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Convex ETH-STETH",
    "slug": "as:convex-finance-eth-steth-ethereum",
    "symbol": "asETH-STET",
    "description": "Convex ETH-STETH strategy on Ethereum",
    "shortDescription": "Convex yield on Ethereum",
    "nativeAddress": "0x000000000000000000000000000000000000040f",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "weth",
    "decimals": 18,
    "scale": 18,
    "weiPerUnit": 1000000000000000000,
    "id": 1039,
    "apy": 1.55,
    "tvl": 22997763,
    "protocols": [
      "convex-finance"
    ],
    "rewardTokens": [
      "0xd533a949740bb3306d119cc777fa900ba034cd52",
      "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b"
    ],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "lending"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.00774175,
        "investedApyDaily": 1.54835,
        "investedApyWeekly": 10.83845,
        "volume": 2299776.3000000003,
        "ror": 0.0077417499999999995,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "weth",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:convex-finance-eth-steth-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_39",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "e378a7c2-6285-4993-9397-87ac9c8adc15",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Yearn WETH",
    "slug": "as:yearn-finance-weth-ethereum",
    "symbol": "asWETH",
    "description": "Yearn WETH strategy on Ethereum",
    "shortDescription": "Yearn yield on Ethereum",
    "nativeAddress": "0x0000000000000000000000000000000000000410",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "weth",
    "decimals": 18,
    "scale": 18,
    "weiPerUnit": 1000000000000000000,
    "id": 1040,
    "apy": 1.91,
    "tvl": 22679095,
    "protocols": [
      "yearn-finance"
    ],
    "rewardTokens": [],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "lending"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.0095434,
        "investedApyDaily": 1.90868,
        "investedApyWeekly": 13.360759999999999,
        "volume": 2267909.5,
        "ror": 0.0095434,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "weth",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:yearn-finance-weth-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_40",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "2b840e0a-2823-4972-9bfc-8b766c90374b",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Yearn USDS",
    "slug": "as:yearn-finance-usds-ethereum",
    "symbol": "asUSDS",
    "description": "Yearn USDS strategy on Ethereum",
    "shortDescription": "Yearn yield on Ethereum",
    "nativeAddress": "0x0000000000000000000000000000000000000411",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "usdc",
    "decimals": 6,
    "scale": 6,
    "weiPerUnit": 1000000,
    "id": 1041,
    "apy": 4.77,
    "tvl": 18258175,
    "protocols": [
      "yearn-finance"
    ],
    "rewardTokens": [],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "lending"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.0238328,
        "investedApyDaily": 4.76656,
        "investedApyWeekly": 33.36592,
        "volume": 1825817.5,
        "ror": 0.0238328,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "usdc",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:yearn-finance-usds-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_41",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "7501ef09-87d1-405c-b2b2-f269b2727289",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Yearn USDS",
    "slug": "as:yearn-finance-usds-ethereum",
    "symbol": "asUSDS",
    "description": "Yearn USDS strategy on Ethereum",
    "shortDescription": "Yearn yield on Ethereum",
    "nativeAddress": "0x0000000000000000000000000000000000000412",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "usdc",
    "decimals": 6,
    "scale": 6,
    "weiPerUnit": 1000000,
    "id": 1042,
    "apy": 8.64,
    "tvl": 17955086,
    "protocols": [
      "yearn-finance"
    ],
    "rewardTokens": [],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "lending"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.0432241,
        "investedApyDaily": 8.64482,
        "investedApyWeekly": 60.51374,
        "volume": 1795508.6,
        "ror": 0.043224099999999994,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "usdc",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:yearn-finance-usds-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_42",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "3033d94b-dcaf-4a0b-a9dd-a92998c74d5e",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Balancer BAL-WETH",
    "slug": "as:balancer-v2-bal-weth-ethereum",
    "symbol": "asBAL-WETH",
    "description": "Balancer BAL-WETH strategy on Ethereum",
    "shortDescription": "Balancer yield on Ethereum",
    "nativeAddress": "0x0000000000000000000000000000000000000414",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "weth",
    "decimals": 18,
    "scale": 18,
    "weiPerUnit": 1000000000000000000,
    "id": 1044,
    "apy": 3.51,
    "tvl": 5963988,
    "protocols": [
      "balancer"
    ],
    "rewardTokens": [],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "lending"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.01753305,
        "investedApyDaily": 3.50661,
        "investedApyWeekly": 24.54627,
        "volume": 596398.8,
        "ror": 0.017533049999999998,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "weth",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:balancer-v2-bal-weth-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_44",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "30eedaf4-83f7-418b-985b-89478d4b90e6",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "SushiSwap WBTC-WETH",
    "slug": "as:sushiswap-wbtc-weth-ethereum",
    "symbol": "asWBTC-WET",
    "description": "SushiSwap WBTC-WETH strategy on Ethereum",
    "shortDescription": "SushiSwap yield on Ethereum",
    "nativeAddress": "0x0000000000000000000000000000000000000417",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "wbtc",
    "decimals": 8,
    "scale": 8,
    "weiPerUnit": 100000000,
    "id": 1047,
    "apy": 0.47,
    "tvl": 2262541,
    "protocols": [
      "sushi"
    ],
    "rewardTokens": [],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "liquidity-providing"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.002358,
        "investedApyDaily": 0.4716,
        "investedApyWeekly": 3.3012,
        "volume": 226254.1,
        "ror": 0.0023580000000000003,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "wbtc",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:sushiswap-wbtc-weth-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_47",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "721c17e7-d8e9-4288-8436-16c27ad264df",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "SushiSwap ILV-WETH",
    "slug": "as:sushiswap-ilv-weth-ethereum",
    "symbol": "asILV-WETH",
    "description": "SushiSwap ILV-WETH strategy on Ethereum",
    "shortDescription": "SushiSwap yield on Ethereum",
    "nativeAddress": "0x0000000000000000000000000000000000000418",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "weth",
    "decimals": 18,
    "scale": 18,
    "weiPerUnit": 1000000000000000000,
    "id": 1048,
    "apy": 2.57,
    "tvl": 2073553,
    "protocols": [
      "sushi"
    ],
    "rewardTokens": [],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "liquidity-providing"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.0128353,
        "investedApyDaily": 2.56706,
        "investedApyWeekly": 17.96942,
        "volume": 207355.30000000002,
        "ror": 0.012835300000000001,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "weth",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:sushiswap-ilv-weth-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_48",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "a951524d-177e-423b-bcf7-a172b376a08d",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  },
  {
    "name": "Balancer WBTC-WETH",
    "slug": "as:balancer-v2-wbtc-weth-ethereum",
    "symbol": "asWBTC-WET",
    "description": "Balancer WBTC-WETH strategy on Ethereum",
    "shortDescription": "Balancer yield on Ethereum",
    "nativeAddress": "0x0000000000000000000000000000000000000419",
    "nativeNetwork": "ethereum-mainnet",
    "denomination": "wbtc",
    "decimals": 8,
    "scale": 8,
    "weiPerUnit": 100000000,
    "id": 1049,
    "apy": 0.21,
    "tvl": 1695673,
    "protocols": [
      "balancer"
    ],
    "rewardTokens": [],
    "status": "active",
    "color1": "#627EEA",
    "color2": "#3C3C3D",
    "exposureNetworks": [
      "ethereum-mainnet"
    ],
    "types": [
      "lending"
    ],
    "fees": {
      "entry": 0,
      "exit": 0,
      "mgmt": 0.5,
      "perf": 10
    },
    "limits": {
      "minDeposit": 0.01,
      "minWithdrawal": 0.01,
      "maxDeposit": 1000000,
      "maxSlippage": 1
    },
    "valuable": {
      "initial": {
        "date": "2024-01-15T00:00:00.000Z",
        "sharePrice": 1,
        "volume": 0,
        "ror": 0,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "last": {
        "date": "2026-03-15T22:35:37.047Z",
        "sharePrice": 1.0010632,
        "investedApyDaily": 0.21264,
        "investedApyWeekly": 1.48848,
        "volume": 169567.30000000002,
        "ror": 0.0010632,
        "exposureByNetwork": null,
        "exposureByProtocol": null,
        "exposureByNetworkByProtocol": null
      },
      "denomination": "wbtc",
      "dateStart": 1742078137047,
      "dateStop": 1773614137047
    },
    "scoring": {
      "value": 7.5,
      "weight": 1,
      "description": "Overall score",
      "safety": {
        "value": 8,
        "weight": 0.3,
        "description": "Audit score"
      },
      "profitability": {
        "value": 7,
        "weight": 0.3,
        "description": "Returns"
      },
      "scalability": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Capacity",
        "_id": "sc"
      },
      "liquidity": {
        "value": 7.5,
        "weight": 0.2,
        "description": "Liquidity",
        "_id": "lq"
      }
    },
    "blocky": {
      "seed": "as:balancer-v2-wbtc-weth-ethereum",
      "seedArr": [
        1,
        2,
        3,
        4
      ],
      "theme": {
        "name": "default",
        "primary": "#627EEA",
        "secondary": "#3C3C3D",
        "bg": [
          "#1a1b2e"
        ],
        "fg": [
          "#fff"
        ],
        "shadow": [
          "#000"
        ],
        "overlay": [
          "rgba(0,0,0,0.5)"
        ],
        "palette": [
          "#627EEA"
        ],
        "primaryPalette": [
          "#627EEA"
        ],
        "success": "#00D395",
        "warning": "#F0B90B",
        "error": "#FF4444",
        "notice": "#00A3FF",
        "info": "#627EEA",
        "debug": "#888",
        "bgSuccess": "#003322",
        "bgWarning": "#332200",
        "bgError": "#330011",
        "bgDebug": "#222",
        "bgNotice": "#002233",
        "bgInfo": "#001133"
      },
      "size": 8,
      "scale": 4,
      "color": "#627EEA",
      "bgColor": "#1a1b2e",
      "spotColor": "#B6509E",
      "canvas": null,
      "ctx": null,
      "dataUrl": "",
      "rendered": false
    },
    "_id": "strat_49",
    "isLastRevision": true,
    "revision": 1,
    "createdBy": "system",
    "updatedBy": "system",
    "descriptionSlides": [],
    "landing": "",
    "docs": "",
    "codebase": "",
    "app": "",
    "twitter": "",
    "blog": "",
    "discord": "",
    "email": "",
    "telegram": "",
    "contract": "",
    "token": "",
    "isDummy": false,
    "nonNativeAddresses": [],
    "standards": [],
    "explorer": "",
    "hexId": "0x1",
    "lzId": 0,
    "lzEndpoint": "",
    "coinGeckoId": "",
    "coinMarketCapId": "",
    "defiLlamaId": "39980ed4-31dd-4216-a7c7-1b878f367807",
    "exponentialId": "",
    "defiSafetyId": "",
    "solityId": "",
    "shortAddress": "0x00000000...",
    "chainlinkId": "",
    "addressCount": 0,
    "issuancePrice": 1,
    "markPrice": 1,
    "issuanceSupply": 0,
    "supply": 0,
    "maxSupply": 0,
    "lockedSupply": 0,
    "circulatingSupply": 0,
    "marketCap": 0,
    "dilutedMarketCap": 0,
    "buyEnabled": true,
    "sellEnabled": true,
    "buyTax": 0,
    "sellTax": 0,
    "minBuy": 0,
    "maxBuy": 0,
    "minSell": 0,
    "maxSell": 0,
    "aggregationLevel": 1,
    "deDotFiInfo": null,
    "coinGeckoInfo": null,
    "exponentialInfo": null,
    "contracts": {},
    "createdAt": "2026-03-15T22:35:37.047Z",
    "updatedAt": "2026-03-15T22:35:37.047Z"
  }
];
