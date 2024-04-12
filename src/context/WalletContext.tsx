import { createContext, useState, useCallback } from "react";
import { ethers } from "ethers";
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

  const connectWallet = useCallback(async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const chainId = await provider
          .getNetwork()
          .then((network) => network.chainId);
        if (chainId !== desiredNetwork) {
          alert({
            title: "Wrong Network",
            content: "Please connect to the Shardeum Sphinx network.",
          });
          return;
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
      alert({
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
