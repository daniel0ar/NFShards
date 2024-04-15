
import Link from 'next/link';
import Image from 'next/image';
import { ethers } from 'ethers';
import { Layout, Button, Modal, Space, Typography } from 'antd';
import { useCallback, useContext, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import { useRouter } from 'next/router';
import { WalletContext } from '@/context/WalletContext';

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
        <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="/">
            <Image src="/logo.png" alt="Logo" height={32} width={140} style={{ marginRight: '10px', marginTop: '30px' }} />
            </Link>
            <nav style={{ display: 'flex', gap: '20px' }}>
            <Link href="/" style={{ color: router.pathname === '/' ? '#A4FF00' : 'white', cursor: 'pointer' }}>Home</Link>
            </nav>
            {connected ? (
                <Space direction="horizontal" align="center">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'end', marginRight: '10px' }}>
                        <Text style={{ color: 'white', marginBottom: '5px' }}>
                            {selectedAddress.slice(0, 6) + "..." + selectedAddress.slice(-4)}
                        </Text>
                        <Text style={{ color: 'white' }}>
                            {balance.slice(0,5)} SHM
                        </Text>
                    </div>
                    <Button type="primary" shape="circle" onClick={() => setVisible(true)} />
                </Space>
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