import { createContext, useState, useCallback } from "react";
import { ethers } from "ethers";
import { Modal } from "antd"
import React from 'react';


interface WalletContextType {
  connected: boolean;
  selectedAddress: string | null;
  balance: string | null;
  visible: boolean;
  signer: ethers.Signer | null;
  setConnected: (connected: boolean) => void; 
  setVisible: (visible: boolean) => void;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  setSelectedAddress: (address: string | null) => void;
  setBalance: (balance: string | null) => void;
}

export const WalletContext = createContext<WalletContextType | null>(null);

const desiredNetwork = 8082;

export const WalletProvider = ({ children }) => {
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [connected, setConnected] = useState(false);
  const [visible, setVisible] = useState(false);
  const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner | null>(null);

  const updateBalance = useCallback(async (account) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum!);
    const balance = await provider.getBalance(account);
    setBalance(ethers.utils.formatEther(balance));
  }, []);
  
  const addShardeumNetwork = async () => {
    window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainName: 'Shardeum Sphinx 1.X',
          chainId: ethers.utils.hexlify(desiredNetwork),
          nativeCurrency: { name: 'SHM', decimals: 18, symbol: 'SHM' },
          rpcUrls: ['https://sphinx.shardeum.org']
        }
      ]
    });
  }

  const switchToShardeumNetwork = async () => {
     window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: ethers.utils.hexlify(desiredNetwork) }]
    });
  }

  const connectWallet = useCallback(async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const chainId = await provider
          .getNetwork()
          .then((network) => network.chainId);
        if (chainId !== desiredNetwork) {
          try {
            await switchToShardeumNetwork();
          } catch (err) {
              // This error code indicates that the chain has not been added to MetaMask
            if (err.code === 4902) {
              await addShardeumNetwork(); 
            }
          }
        }

        // Set signer
        const signerInstance = provider.getSigner();
        setSigner(signerInstance);

        const accounts = await window.ethereum.request!({
          method: "eth_requestAccounts",
        });
        setSelectedAddress(accounts[0]);
        await updateBalance(accounts[0]);
        setConnected(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      Modal.error({
        title: "Metamask is not installed",
        content: "Please install it from https://metamask.io",
      });
    }
  }, [updateBalance]);

  const disconnectWallet = useCallback(() => {
    setSelectedAddress(null);
    setBalance(null);
    setConnected(false);
    setSigner(null);
    alert("Wallet disconnected");
  }, []);

  return (
    <WalletContext.Provider
      value={{
        connected,
        selectedAddress,
        balance,
        visible,
        signer,
        setConnected,
        setVisible,
        connectWallet,
        disconnectWallet,
        setSelectedAddress,
        setBalance,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
