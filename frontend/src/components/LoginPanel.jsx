import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchLoginUser } from '../helpers/fetchApi';
import { LoginButton, LoginMessage } from '../styles/LoginStyles';

function LoginPanel() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isDisable, setIsDisable] = useState(true);
  const [loginMessage, setLoginMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  function handleForm({ target: { type, value } }) {
    setFormData({
      ...formData,
      [type]: value,
    });
  }

  async function verifyUserCredentials({ email, password }) {
    const messageShownTimer = 2000;
    const loginResponse = await fetchLoginUser(email, password);
    if (loginResponse.data.error) {
      setLoginMessage(loginResponse.data.message);
      setIsVisible(true);
    } else {
      console.log(loginResponse);
      setLoginMessage('Login efetuado com sucesso');
      setIsVisible(true);
    }
    setTimeout(() => setIsVisible(false), messageShownTimer);
    setFormData({ email: '', password: '' });
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
        <LoginMessage isVisibleHandler={ isVisible }>{ loginMessage }</LoginMessage>
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
