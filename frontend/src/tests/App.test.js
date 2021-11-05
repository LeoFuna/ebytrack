import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import { fetchLoginUser } from '../helpers/fetchApi';
import App from '../App';

describe('LOGIN Testa presença dos itens', () => {
  describe('ao iniciar', () => {
    test('deve possuir um Cabeçalho, um Painel de Login e um Rodapé', () => {
      render(<App />);
      const header = screen.getByText('ack');
      const panel = screen.getByTestId('panel-container');
      const signature = screen.getByText(/Funa/);
      expect(header).toBeInTheDocument();
      expect(panel).toBeInTheDocument();
      expect(signature).toBeInTheDocument();
    });
    test('o painel de login deve possuir input de email e senha', () => {
      render(<App />);
      const emailInput = screen.getByTestId('email-login');
      const passwordInput = screen.getByTestId('password-login');
      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });
    test('o botao login deve estar presente e desabilitado', () => {
      render(<App />);
      const buttonLogin = screen.getByTestId('login-button');
      expect(buttonLogin).toBeInTheDocument();
      expect(buttonLogin).toBeDisabled();
      expect(buttonLogin.innerHTML).toBe('login');
    });
    test('deve ter um link para cadastro de usuário', () => {
      render(<App />);
      const signupLink = screen.getByTestId('signup');
      expect(signupLink).toBeInTheDocument();
      expect(signupLink.innerHTML).toBe('Primeiro Acesso');
    });
  });
});

describe('Testa as funcionalidades', () => {
  describe('ao iniciar a aplicação', () => {
    test('deve ser possível ir à página de cadastro de usuários', () => {
      render(<App />);
      const signupLink = screen.getByTestId('signup');
      fireEvent.click(signupLink);
      const signupPage = screen.getByTestId('signup-main-container');
      expect(signupPage).toBeInTheDocument();
      expect(signupLink).not.toBeInTheDocument();
    });
  });
});

describe('SIGNUP Testa a presença dos itens', () => {
  test('ao ir no cadastro deve haver cabeçalho, painel de cadastro e rodapé', () => {
    render(<App />);
    const signupPanel = screen.getByTestId('signup-panel');
    const signupHeader = screen.getByTestId('header-container-signup');
    const signature = screen.getByText(/Funa/);
    expect(signupPanel).toBeInTheDocument();
    expect(signupHeader).toBeInTheDocument();
    expect(signature).toBeInTheDocument();
  });
  test('no cabeçalho, sendo o valor de "ack"', () => {
    render(<App />);
    const headerText = screen.getByText('ack');
    expect(headerText).toBeInTheDocument();
  });
  test('no painel, possuindo 4 inputs', () => {
    render(<App />);
    const nameInput = screen.getByTestId('name-signup');
    const lastnameInput = screen.getByTestId('lastname-signup');
    const emailInput = screen.getByTestId('email-signup');
    const passwordInput = screen.getByTestId('password-signup');
    expect(nameInput).toBeInTheDocument();
    expect(lastnameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});
