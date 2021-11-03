import api from './service';

export const fetchCreateUser = async (name, lastname, email, password) => {
  const response = await api.post('/users', { name, lastname, email, password });
  console.log(response);
};

export const fetchLoginUser = async () => {
  console.log('Vai logar o usuário');
};
