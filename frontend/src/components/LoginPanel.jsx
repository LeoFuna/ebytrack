import React, { useState } from 'react';

function LoginPanel() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  function handleForm({ target: { id, value } }) {
    setFormData({
      ...formData,
      [id]: value,
    });
  }
  return (
    <div id="panel-container">
      <form>
        <input
          type="email"
          onChange={ handleForm }
          value={ formData.email }
          placeholder="Email"
          id="email"
        />
        <input
          type="password"
          onChange={ handleForm }
          value={ formData.password }
          placeholder="Password"
          id="password"
        />
        <button type="submit" id="login-button">login</button>
      </form>
      {/* Aqui deverá ser um redirect de rota para o signup */}
      <p id="signup">Signup</p>
    </div>
  );
}

export default LoginPanel;
