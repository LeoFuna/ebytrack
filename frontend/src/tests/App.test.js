import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Testa as funcionalidades da aplicação', () => {
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
