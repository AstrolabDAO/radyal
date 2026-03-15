import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import content from "../data/content.json";
import { chainImages } from "./mappings";
import { FEATURED_WALLETS } from "./web3-constants";

const WAGMI_PROJECT_ID = "9f1e3cc40c945e35fb3f36ee8cc124f9";

interface Web3ModalConfig {
  web3Modal: ReturnType<typeof createAppKit>;
  config: any;
}

export const setupWeb3modal = (chains): Web3ModalConfig => {
  const wagmiAdapter = new WagmiAdapter({
    projectId: WAGMI_PROJECT_ID,
    networks: chains,
  });

  const web3Modal = createAppKit({
    adapters: [wagmiAdapter],
    networks: chains,
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

  return { web3Modal, config: wagmiAdapter.wagmiConfig };
};
