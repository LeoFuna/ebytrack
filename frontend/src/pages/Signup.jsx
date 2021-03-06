import React from 'react';
import HeaderSignup from '../components/HeaderSignup';
import Signature from '../components/Signature';
import SignupPanel from '../components/SignupPanel';
import '../styles/signup.css';

function Signup() {
  return (
    <div data-testid="signup-main-container" id="signup-main-container">
      <HeaderSignup />
      <SignupPanel />
      <Signature />
    </div>
  );
}

export default Signup;
