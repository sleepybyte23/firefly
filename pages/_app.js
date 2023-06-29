import "@/styles/globals.css";
import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { WagmiConfig, configureChains, createClient } from "wagmi";
import { goerli, mainnet } from "wagmi/chains";
import "@rainbow-me/rainbowkit/styles.css";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  const { provider, webSocketProvider, chains } = configureChains(
    [mainnet],
    [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_PROVIDER })]
  );

  const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    projectId: "705fd83930c7c72a97a23be0b254052b",
    chains,
  });

  const client = createClient({
    provider,
    webSocketProvider,
    autoConnect: false,
    //   // added connectors from rainbowkit
    connectors,
  });
  return (
    <>
      <WagmiConfig client={client}>
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          <RainbowKitProvider chains={chains}>
            <ChakraProvider theme={theme}>
              <Component {...pageProps} />
              <Analytics />
            </ChakraProvider>
          </RainbowKitProvider>
        </SessionProvider>
      </WagmiConfig>
    </>
  );
}
