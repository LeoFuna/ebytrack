import React, { useState, useEffect } from 'react';
import { SignupButton, SuccessSignupMessage } from '../styles/SignupStyles';

function SignupPanel() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    photo: '', // Aqui pretendo colocar url para um caminho de foto do usuário
  });
  const [isDisable, setIsDisable] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  function handleForm({ target: { name, value } }) {
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function createUser(userData) {
    const successResponse = {
      id: 123456, name: 'Leo', lastname: 'Funa', email: 'meuemail@ebytr.com',
    };
    // Vai ao BD e tenta fazer a config de criar usuário e dali retorna a informação de ok ou erro
    console.log('Dados de cadastro foram usado', userData);
    if (successResponse.err) {
      console.log('erro');
    } else {
      const messageShownTimer = 2000;
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), messageShownTimer);
      setFormData({
        name: '', lastname: '', email: '', password: '', photo: '',
      });
    }
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
      <SuccessSignupMessage isVisible={ isVisible }>
        <h4>CADASTRO CRIADO COM SUCESSO</h4>
      </SuccessSignupMessage>
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
    </div>
  );
}

export default SignupPanel;
