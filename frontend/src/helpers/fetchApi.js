import api from './service';

export const fetchCreateUser = async (name, lastname, email, password) => {
  try {
    const { data } = await api.post('/users', { name, lastname, email, password });
    console.log(data);
    return data;
  } catch (err) {
    console.log(err); // precisa de implementaçao correta
  }
};

export const fetchLoginUser = async () => {
  console.log('Vai logar o usuário');
};
