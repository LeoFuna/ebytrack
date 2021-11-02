import React, { useEffect, useState } from 'react';
import { LoginButton } from '../styles/LoginStyles';

function LoginPanel() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isDisable, setIsDisable] = useState(true);
  function handleForm({ target: { id, value } }) {
    setFormData({
      ...formData,
      [id]: value,
    });
  }

  useEffect(() => {
    if (formData.email && formData.password) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [formData]);

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
        <LoginButton
          disabled={ isDisable }
          type="submit"
          id="login-button"
        >
          login

        </LoginButton>
      </form>
      {/* Aqui deverá ser um redirect de rota para o signup */}
      <p id="signup">Signup</p>
    </div>
  );
}

export default LoginPanel;
