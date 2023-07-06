import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactNotifications } from 'react-notifications-component';
import ScrollToTop from 'react-scroll-to-top';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import HomePage from './pages/HomePage';
import Account from './pages/Account';
import AdminLogin from './pages/AdminLogin';
import Register from './pages/Register';
import Login from './pages/Login';
import OtpVerify from './pages/OtpVerify';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

function App() {
  const getLibrary = (provider: any) => {
    const library = new Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
  };
  return (
    // @ts-ignore
    <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signIn" element={<Login />} />
          <Route path="/signUp" element={<Register />} />
          <Route path="/otpVerify" element={<OtpVerify />} />
          <Route path="/myAccount" element={<Account />} />
          <Route path="/admin_login" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
      <ReactNotifications />
      <ScrollToTop
        smooth
        color="#401d87"
        width="24"
        height="24"
        className="!rounded-full !flex !justify-center !items-center !w-[50px] !h-[50px]"
      />
    </Web3ReactProvider>
  );
}

export default App;
