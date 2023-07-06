import React from 'react';
import Header from '../Header';
import './authlayout.scss';

const AuthLayout = (props: any) => {
  return (
    <div className="auth-layout">
      <Header />
      <main>{props.children}</main>
    </div>
  );
};

export default AuthLayout;
