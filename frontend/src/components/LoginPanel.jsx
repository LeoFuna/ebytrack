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
        <button type="submit" id="login-button">login</button>
      </form>
      {/* Aqui deverá ser um redirect de rota para o signup */}
      <p id="signup">Signup</p>
    </div>
  );
}

export default LoginPanel;
