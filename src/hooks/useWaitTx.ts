import { ethers } from "ethers";
import { useState, useEffect } from "react";

export const useWaitTx = (txHash: any) => {
  const [receipt, setReceipt] = useState<ethers.providers.TransactionReceipt>();

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const checkReceipt = async () => {
      const rx = await provider.getTransactionReceipt(txHash);
      if (rx) {
        setReceipt(rx);
      }
    };

    const interval = setInterval(checkReceipt, 1000);

    return () => clearInterval(interval);
  }, [txHash]);
}