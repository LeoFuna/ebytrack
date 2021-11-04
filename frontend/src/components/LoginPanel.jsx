import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchLoginUser } from '../helpers/fetchApi';
import { LoginButton } from '../styles/LoginStyles';

function LoginPanel() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isDisable, setIsDisable] = useState(true);

  function handleForm({ target: { type, value } }) {
    setFormData({
      ...formData,
      [type]: value,
    });
  }

  async function verifyUserCredentials({ email, password }) {
    const loginResponse = await fetchLoginUser(email, password);
    if (loginResponse.data.error) {
      console.log('Email ou senha inválidos...');
    } else {
      console.log('Login com Sucesso');
    }
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
          id="email-login"
        />
        <input
          type="password"
          onChange={ handleForm }
          value={ formData.password }
          placeholder="Password"
          id="password-login"
        />
        <LoginButton
          disabled={ isDisable }
          type="button"
          onClick={ () => verifyUserCredentials(formData) }
          id="login-button"
        >
          login
        </LoginButton>
      </form>
      <Link to="/signup" style={ { textDecoration: 'none' } }>
        <p id="signup">Signup</p>
      </Link>

    </div>
  );
}

export default LoginPanel;
