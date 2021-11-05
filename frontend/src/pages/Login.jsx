import React, { useEffect } from 'react';
import HeaderLogin from '../components/HeaderLogin';
import LoginPanel from '../components/LoginPanel';
import Signature from '../components/Signature';
import '../styles/login.css';

function Login() {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <div id="login-main-container">
      <HeaderLogin />
      <LoginPanel />
      <Signature />
    </div>
  );
}

export default Login;
