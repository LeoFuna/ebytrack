import api from './service';

export const fetchCreateUser = async (name, lastname, email, password) => {
  try {
    const { data } = await api.post('/users', { name, lastname, email, password });
    return data;
  } catch (err) {
    console.log(err); // precisa de implementaçao correta
  }
};

export const fetchLoginUser = async (email, password) => {
  try {
    const loginResponse = await api.post('/login', { email, password });
    return loginResponse;
  } catch (err) {
    console.log(err);
  }
};
