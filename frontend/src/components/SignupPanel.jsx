import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCreateUser } from '../helpers/fetchApi';
import {
  FailedSignupMessage, SignupButton, SuccessSignupMessage } from '../styles/SignupStyles';

function SignupPanel() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    photo: '', // Aqui pretendo colocar url para um caminho de foto do usuário
  });
  const [isDisable, setIsDisable] = useState(true);
  const [isVisibleHandler, setIsVisibleHandler] = useState({
    success: false, failed: false,
  });
  const [errorMessage, setErrorMessage] = useState('');

  function handleForm({ target: { name, value } }) {
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function createUser(userData) {
    const messageShownTimer = 2000;
    const { name, lastname, email, password } = userData;
    const createResponse = await fetchCreateUser(name, lastname, email, password);
    if (createResponse.error) {
      setErrorMessage(createResponse.message);
      setIsVisibleHandler({ success: false, failed: true });
      setTimeout(() => setIsVisibleHandler({
        success: false, failed: false }), messageShownTimer);
    } else {
      setIsVisibleHandler({ success: true, failed: false });
      setTimeout(() => setIsVisibleHandler({
        success: false, failed: false }), messageShownTimer);
    }
    setFormData({
      name: '', lastname: '', email: '', password: '', photo: '',
    });
  }

  useEffect(() => {
    if (formData.email && formData.password && formData.lastname && formData.name) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [formData]);

  return (
    <div id="signup-container" data-testid="signup-panel">
      <h2>Cadastro de Usuário</h2>
      <SuccessSignupMessage isVisibleHandler={ isVisibleHandler.success }>
        <h4>CADASTRO CRIADO COM SUCESSO</h4>
      </SuccessSignupMessage>
      <FailedSignupMessage isVisibleHandler={ isVisibleHandler.failed }>
        <h4>{ errorMessage }</h4>
      </FailedSignupMessage>
      <form autoComplete="off">
        <input
          type="text"
          name="name"
          onChange={ handleForm }
          value={ formData.name }
          placeholder="Nome"
          id="name-signup"
          data-testid="name-signup"
        />
        <input
          type="text"
          name="lastname"
          onChange={ handleForm }
          value={ formData.lastname }
          placeholder="Sobrenome"
          id="lastname-signup"
          data-testid="lastname-signup"
        />
        <input
          type="email"
          name="email"
          onChange={ handleForm }
          value={ formData.email }
          placeholder="Email"
          id="email-signup"
          data-testid="email-signup"
        />
        <input
          type="text"
          name="password"
          onChange={ handleForm }
          value={ formData.password }
          placeholder="Password"
          id="password-signup"
          data-testid="password-signup"
        />
        <SignupButton
          disabled={ isDisable }
          type="button"
          onClick={ () => createUser(formData) }
          id="signup-button"
          data-testid="signup-button"
        >
          Cadastrar
        </SignupButton>
      </form>
      <Link to="/" style={ { textDecoration: 'none' } }>
        <button
          type="button"
          data-testid="signup-back-button"
          id="signup-back-button"
        >
          Voltar

        </button>
      </Link>
    </div>
  );
}

export default SignupPanel;
