import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { defaultTheme, ChainProvider } from '@cosmos-kit/react';
import { wallets as keplrWallets } from '@cosmos-kit/keplr';
import { wallets as cosmostationWallets } from '@cosmos-kit/cosmostation';
import { wallets as leapWallets } from '@cosmos-kit/leap';

import { TailwindModal } from '../components';
import { ThemeProvider } from '../contexts/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { MainLayout } from '../components/layout/main'

import { SignerOptions } from '@cosmos-kit/core';
import { chains, assets } from 'chain-registry';
import { NavBar } from '../components/navbar';

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const signerOptions: SignerOptions = {
    // signingStargate: (_chain: Chain) => {
    //   return getSigningCosmosClientOptions();
    // }
  };

  return (
    <ChakraProvider theme={defaultTheme}>
    <ChainProvider
      chains={chains}
      assetLists={assets}
      wallets={[...keplrWallets, ...cosmostationWallets, ...leapWallets]}
      walletConnectOptions={{
        signClient: {
          projectId: 'a8510432ebb71e6948cfd6cde54b70f7',
          relayUrl: 'wss://relay.walletconnect.org',
          metadata: {
            name: 'Terp Network',
            description: 'CosmosKit dapp template',
            url: 'https://terp.network/',
            icons: [],
          },
        },
      }}
      wrappedWithChakra={true}
      signerOptions={signerOptions}
      walletModal={TailwindModal}
    >
      <ThemeProvider>
          <MainLayout />
        <div className="min-h-screen bg-white dark:bg-gray-bg dark:text-white background">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </ChainProvider>
    </ChakraProvider>
  );
}

export default CreateCosmosApp;

