import React from 'react';
import HeaderLogin from '../components/HeaderLogin';
import LoginPanel from '../components/LoginPanel';
import Signature from '../components/Signature';

function Login() {
  return (
    <div>
      <HeaderLogin />
      <LoginPanel />
      <Signature />
    </div>
  );
}

export default Login;
