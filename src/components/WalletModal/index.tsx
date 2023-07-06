import React from 'react';
import { useNavigate } from 'react-router-dom';
import { injected, walletconnect, walletlink } from '../../utils/connector';
import { useWeb3React } from '@web3-react/core';
import { toast } from '../Toast';
import Modal from '../Modal';
import IconMenu from '../Icons';
import './walletmodal.scss';
import { error } from 'console';

const walletList = [
  { label: 'MetaMask', icon: 'MetaMaskWallet', type: 'metamask' },
  { label: 'WalletConnect', icon: 'MobileWallet', type: 'walletconnect' },
  { label: 'Coinbase Wallet', icon: 'CoinBaseWallet', type: 'coinbase' }
];

const WalletModal = ({ open, setOpen, setIsWalletConnect }: any) => {
  const navigate = useNavigate();
  // @ts-ignore
  const { activate, connector, account, library, ...props } = useWeb3React();

  const onConnect = async (type: string) => {
    switch (type) {
      case 'metamask':
        try {
          await activate(injected, undefined, true).then((error:any)=>{
            console.log(error)
          })
          if (account) {
            setIsWalletConnect(true);
            setOpen(false);
          } else {
            setIsWalletConnect(false);
          }
          localStorage.setItem('type', 'metamask');
          navigate('/myAccount');
        } catch (error: any) {
          setIsWalletConnect(false);
          toast.error(error.message);
        }
        break;
      case 'walletconnect':
        try {
          await activate(walletconnect, undefined, true).then((error:any)=>{
            console.log(error)
          })
          // await activate(walletconnect, undefined, true, (error: any) => console.log(error));
          if (account) {
            setIsWalletConnect(true);
            setOpen(false);
          } else {
            setIsWalletConnect(false);
          }
          localStorage.setItem('type', 'walletconnect');
          navigate('/dashboard');
        } catch (error: any) {
          console.log(error);
          toast.error(error.message);
        }
        break;
      case 'coinbase':
        try {
          await activate(walletlink, undefined, true).then((error:any)=>{
            console.log(error)
          })
          // await activate(walletlink, undefined, true, (error: any) => console.log(error));
          if (account) {
            setIsWalletConnect(true);
            setOpen(false);
          } else {
            setIsWalletConnect(false);
          }
          localStorage.setItem('type', 'coinbase');
          navigate('/dashboard');
        } catch (error: any) {
          console.log(error);
          toast.error(error.message);
        }
        break;
    }
  };

  return (
    <>
      {open && (
        <Modal
          open={open}
          setOpen={setOpen}
          title="Connect"
          className=" 2xs:w-[360px] xs:w-[440px] xs:h-[400px] sm:h-[480px]"
        >
          <div className="wallet-main-container">
            {walletList.map((item, ind) => {
              return (
                <div key={ind} className="wallet-item" onClick={() => onConnect(item.type)}>
                  <p>{item.label}</p>
                  <div className="wallet-icon">
                    <IconMenu icon={item.icon} size={30} />
                  </div>
                </div>
              );
            })}
          </div>
        </Modal>
      )}
    </>
  );
};

export default WalletModal;
