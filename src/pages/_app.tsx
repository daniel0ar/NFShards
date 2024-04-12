import '@/styles/globals.css';
import React from 'react';
import { WalletProvider } from '../context/WalletContext';

function App({ Component, pageProps }) {
  return (
    <div>
      <WalletProvider>
      <Component {...pageProps} />
      </WalletProvider>
    </div>
  );
}

export default App;
