import React from 'react';

function LoginPanel() {
  return (
    <div id="panel-container">
      <form>
        <label htmlFor="email">
          <input type="email" placeholder="Email" id="email" />
        </label>
        <label htmlFor="password">
          <input type="password" placeholder="Password" id="password" />
        </label>
        <button type="button" id="login-button">login</button>
      </form>
      <p>Signup</p>
    </div>
  );
}

export default LoginPanel;
