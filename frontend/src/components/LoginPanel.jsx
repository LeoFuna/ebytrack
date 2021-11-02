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
          onClick={ () => verifyUserCredentials(formData) }
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
