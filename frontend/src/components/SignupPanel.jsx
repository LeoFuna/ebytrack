import React, { useState } from 'react';

function SignupPanel() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    photo: '', // Aqui pretendo colocar url para um caminho de foto do usuário
  });

  function handleForm({ target: { type, value } }) {
    setFormData({
      ...formData,
      [type]: value,
    });
  }

  return (
    <div id="signup-container">
      <form>
        <input
          type="name"
          onChange={ handleForm }
          value={ formData.name }
          placeholder="Nome"
          id="nameSignup"
        />
        <input
          type="lastname"
          onChange={ handleForm }
          value={ formData.lastname }
          placeholder="Sobrenome"
          id="lastnameSignup"
        />
        <input
          type="email"
          onChange={ handleForm }
          value={ formData.email }
          placeholder="Email"
          id="emailSignup"
        />
        <input
          type="password"
          onChange={ handleForm }
          value={ formData.password }
          placeholder="Password"
          id="passwordSignup"
        />
      </form>
    </div>
  );
}

export default SignupPanel;
