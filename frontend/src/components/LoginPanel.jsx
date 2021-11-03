import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

  function verifyUserCredentials({ email, password }) {
    console.log('Acessei com:', email, password);
    // Aqui o sistema acionará o BD e verificará se existe um usuário com esse email e senha para retornar o acesso ou o bloqueio com erro
    const retornoDoBanco = { status: 404 };
    const success = 200;
    if (retornoDoBanco.status === success) {
      console.log('Login com Sucesso');
      // Redirecione para a página de login
    } else {
      console.log('Email ou senha inválidos...');
      // retorne o erro recebido com uma mensagem específica
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
          type="submit"
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
