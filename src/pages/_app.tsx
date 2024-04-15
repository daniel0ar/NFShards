import '@/styles/globals.css';
import React from 'react';
import { WalletProvider } from '../context/WalletContext';
import Navbar from "@/components/Navbar";

function App({ Component, pageProps }) {
  return (
    <div>
      <WalletProvider>
        <Navbar/>
        <div className='container mx-auto'>
          <Component {...pageProps} />
        </div>
      </WalletProvider>
    </div>
  );
}

export default App;
