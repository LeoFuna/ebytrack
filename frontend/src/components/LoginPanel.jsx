import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TasksContext from '../context/tasksContext';
import UsersContext from '../context/usersContext';
import { fetchLoginUser } from '../helpers/fetchApi';
import { LoginButton, LoginMessage } from '../styles/LoginStyles';

function LoginPanel() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isDisable, setIsDisable] = useState(true);
  const [loginMessage, setLoginMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const { setGreeting } = useContext(UsersContext);
  const { getTasksFromApi } = useContext(TasksContext);
  const history = useHistory(); // https://stackoverflow.com/questions/60516300/how-to-use-in-reactjs-functional-component-history-push

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
      setTimeout(() => setIsVisible(false), messageShownTimer);
      setFormData({ email: '', password: '' });
    } else {
      localStorage.setItem('token', loginResponse.data.token);
      await getTasksFromApi();
      setGreeting(loginResponse.data.name);
      setLoginMessage('Login efetuado com sucesso');
      setIsVisible(true);
      history.push({ pathname: '/tasks' });
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
    <div id="panel-container" data-testid="panel-container">
      <form autoComplete="off">
        <input
          type="email"
          onChange={ handleForm }
          value={ formData.email }
          placeholder="Email"
          id="email-login"
          data-testid="email-login"
        />
        <LoginMessage isVisibleHandler={ isVisible }>{ loginMessage }</LoginMessage>
        <input
          type="password"
          onChange={ handleForm }
          value={ formData.password }
          placeholder="Password"
          data-testid="password-login"
          id="password-login"
        />
        <LoginButton
          disabled={ isDisable }
          type="button"
          onClick={ () => verifyUserCredentials(formData) }
          data-testid="login-button"
          id="login-button"
        >
          login
        </LoginButton>
      </form>
      <Link to="/signup" style={ { textDecoration: 'none' } }>
        <p id="signup" data-testid="signup">Primeiro Acesso</p>
      </Link>

    </div>
  );
}

export default LoginPanel;
