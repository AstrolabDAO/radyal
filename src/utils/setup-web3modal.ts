import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import * as appKitNetworks from "@reown/appkit/networks";
import content from "../data/content.json";
import { chainImages } from "./mappings";
import { FEATURED_WALLETS, NETWORKS } from "./web3-constants";

const WAGMI_PROJECT_ID = "9f1e3cc40c945e35fb3f36ee8cc124f9";

interface Web3ModalConfig {
  web3Modal: ReturnType<typeof createAppKit>;
  config: any;
}

// Map our network slugs to @reown/appkit network objects
const SLUG_TO_APPKIT: Record<string, any> = {
  "ethereum-mainnet": appKitNetworks.mainnet,
  "polygon-mainnet": appKitNetworks.polygon,
  "arbitrum-mainnet-one": appKitNetworks.arbitrum,
  "optimism-mainnet": appKitNetworks.optimism,
  "base-mainnet": appKitNetworks.base,
  "zksync-era-mainnet": appKitNetworks.zkSync,
  "fantom-mainnet-opera": appKitNetworks.fantom,
  "avalanche-mainnet": appKitNetworks.avalanche,
  "bnb-chain-mainnet": appKitNetworks.bsc,
  "scroll-mainnet": appKitNetworks.scroll,
  "linea-mainnet": appKitNetworks.linea,
  "mantle-mainnet": appKitNetworks.mantle,
  "celo-mainnet": appKitNetworks.celo,
  "moonbeam-mainnet": appKitNetworks.moonbeam,
};

// Build the full chain list from NETWORKS config
const DEFAULT_CHAINS = NETWORKS
  .map((slug) => SLUG_TO_APPKIT[slug])
  .filter(Boolean);

// Ensure at least mainnet is present
if (DEFAULT_CHAINS.length === 0) DEFAULT_CHAINS.push(appKitNetworks.mainnet);

let _appKit: Web3ModalConfig | null = null;

export const setupWeb3modal = (chains?): Web3ModalConfig => {
  // Only call createAppKit once — subsequent calls return the existing instance
  if (_appKit) return _appKit;

  const networks = chains?.length ? chains : DEFAULT_CHAINS;

  const wagmiAdapter = new WagmiAdapter({
    projectId: WAGMI_PROJECT_ID,
    networks,
  });

  const web3Modal = createAppKit({
    adapters: [wagmiAdapter],
    networks,
    chainImages,
    projectId: WAGMI_PROJECT_ID,
    featuredWalletIds: Object.values(FEATURED_WALLETS),
    metadata: {
      name: content.web3modal.name,
      description: content.web3modal.description,
      url: content.web3modal.url,
      icons: [],
    },
    themeMode: "dark" as const,
    themeVariables: {
      "--w3m-border-radius-master": "2px",
      "--w3m-font-family": "Inter",
      "--w3m-accent": "var(--primary)",
      "--w3m-color-mix": "#C1C1C1",
    },
  });

  _appKit = { web3Modal, config: wagmiAdapter.wagmiConfig };
  return _appKit;
};

// Initialize immediately with all known chains
export const defaultWeb3Config = setupWeb3modal();
