import { ethers } from "ethers";
import { useState, useEffect } from "react";

export const useWaitTx = () => {
  const [txhash, setTxhash] = useState();
  const [receipt, setReceipt] = useState<ethers.providers.TransactionReceipt>();

  useEffect(() => {
    if (!txhash){
      return
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const checkReceipt = async () => {
      const rx = await provider.getTransactionReceipt(txhash);
      if (rx) {
        setReceipt(rx);
        clearInterval(interval); 
      }
    };

    const interval = setInterval(checkReceipt, 1000);

    return () => clearInterval(interval);
  }, [txhash]);
  
  return {
    txhash,
    receipt,
    setTxhash,
    setReceipt
  }
}