import React, { useState, useEffect } from 'react';
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

  function handleForm({ target: { name, value } }) {
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function createUser(userData) {
    console.log(userData);// dado que vai ser jogado no BD
    const messageShownTimer = 2000;
    const successResponse = {
      id: 123456, name: 'Leo', lastname: 'Funa', email: 'meuemail@ebytr.com',
    };
    // Vai ao BD e tenta fazer a config de criar usuário e dali retorna a informação de ok ou erro
    if (successResponse.err) {
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
    <div id="signup-container">
      <h2>Cadastro de Usuário</h2>
      <SuccessSignupMessage isVisibleHandler={ isVisibleHandler.success }>
        <h4>CADASTRO CRIADO COM SUCESSO</h4>
      </SuccessSignupMessage>
      <FailedSignupMessage isVisibleHandler={ isVisibleHandler.failed }>
        <h4>DADOS INVÁLIDOS...</h4>
      </FailedSignupMessage>
      <form>
        <input
          type="text"
          name="name"
          onChange={ handleForm }
          value={ formData.name }
          placeholder="Nome"
          id="name-signup"
        />
        <input
          type="text"
          name="lastname"
          onChange={ handleForm }
          value={ formData.lastname }
          placeholder="Sobrenome"
          id="lastname-signup"
        />
        <input
          type="email"
          name="email"
          onChange={ handleForm }
          value={ formData.email }
          placeholder="Email"
          id="email-signup"
        />
        <input
          type="text"
          name="password"
          onChange={ handleForm }
          value={ formData.password }
          placeholder="Password"
          id="password-signup"
        />
        <SignupButton
          disabled={ isDisable }
          type="button"
          onClick={ () => createUser(formData) }
          id="signup-button"
        >
          Signup
        </SignupButton>
      </form>
      <p>voltar</p>
    </div>
  );
}

export default SignupPanel;
