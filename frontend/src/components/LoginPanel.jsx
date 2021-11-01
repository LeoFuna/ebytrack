import React from 'react';

function LoginPanel() {
  return (
    <div>
      <div id="email-input">
        <p>Email: </p>
      </div>
      <div id="password-input">
        <p>Password: </p>
      </div>
      <button type="button" id="login-button">login</button>
      <p>Signup</p>
    </div>
  );
}

export default LoginPanel;
