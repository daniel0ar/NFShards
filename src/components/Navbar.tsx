
import Link from 'next/link';
import Image from 'next/image';
import { ethers } from 'ethers';
import { Layout, Button, Modal, Space, Typography } from 'antd';
import { useCallback, useContext, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import { useRouter } from 'next/router';
import { WalletContext } from '@/context/WalletContext';
import Logo from 'public/logo.png';
import LogoWhite from 'public/logo_white.png';

const { Header } = Layout;
const { Text } = Typography;

const Navbar = () => {
  const router = useRouter();
  const {
    selectedAddress,
    setSelectedAddress,
    balance,
    setBalance,
    connected,
    setConnected,
    visible,
    setVisible,
    connectWallet,
    disconnectWallet
  } = useContext(WalletContext);

  const updateBalance = useCallback(async (account) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(account);
    setBalance(ethers.utils.formatEther(balance));
  }, [setBalance]);

  const handleAccountsChanged = useCallback(async (accounts) => {
    if (accounts.length === 0) {
      setSelectedAddress(null);
      setBalance(null);
      setConnected(false);
    } else if (accounts[0] !== selectedAddress) {
      setSelectedAddress(accounts[0]);
      await updateBalance(accounts[0]);
      setConnected(true);
    }
  }, [selectedAddress, setBalance, setConnected, setSelectedAddress, updateBalance]);

  useEffect(() => {
    const init = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        provider.on('chainChanged', handleChainChanged);
        provider.on('accountsChanged', handleAccountsChanged);
      }
    };
    init();

    return () => {
      if (window.ethereum.removeListener) {
        window.ethereum.removeListener('chainChanged', handleChainChanged);
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    };
  }, [handleAccountsChanged, selectedAddress]);

  const handleChainChanged = (_chainId) => {
    window.location.reload();
  };

    return (
        <Header className='flex justify-between items-center bg-white dark:bg-zinc-900 text-gray-600 dark:text-gray-100'>
            <Link href="/">
            <picture>
              <source srcSet={LogoWhite.src} media="(prefers-color-scheme: dark)" />
              <Image
                  src={Logo}
                  alt="Logo" height={32} width={140} className='mr-4'
              />
            </picture>
            </Link>
            <nav className='flex gap-5'>
            <Link href="/" className={`cursor-pointer hover:text-black dark:hover:text-gray-50 hover:underline`}>Home</Link>
            </nav>
            {connected ? (
              <div className='flex items-center gap-3'>
                <Button type="default" onClick={() => router.push('process')}>Shard NFT</Button>
                <Space direction="horizontal" align="center" className='leading-normal'>
                    <div className='flex flex-col items-end mr-3'>
                        <p>
                            {selectedAddress.slice(0, 6) + "..." + selectedAddress.slice(-4)}
                        </p>
                        <p>
                            {balance.slice(0,5)} SHM
                        </p>
                    </div>
                    <Button type="primary" shape="circle" onClick={() => setVisible(true)} />
                </Space>
              </div>
            ) : (
                <Button type="primary" onClick={connectWallet}>Connect Wallet</Button>
            )}
            <Modal
                title="Wallet Info"
                open={visible}
                onCancel={() => setVisible(false)}
                footer={[
                  <Button key="back" onClick={disconnectWallet}>Disconnect Wallet</Button>,
                ]}
            >
                <Space direction="vertical">
                    <Text>Address: {selectedAddress}</Text>
                    <Text>Balance: {balance} SHM</Text>
                    <Button href="https://docs.shardeum.org/faucet/claim" target="_blank">Claim Testnet SHM</Button>
                </Space>
            </Modal>
        </Header>
    );

}

export default Navbar;