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

export const fetchCreateTask = async ({ description, status, created, token }) => {
  try {
    const createResponse = await api.post('/tasks',
      { description, status, created },
      { headers: { Authorization: token } });
    return createResponse;
  } catch (err) {
    console.log(err);
  }
};

export const fetchGetTasksByUser = async (token) => {
  try {
    const tasksFromUser = await api.get('/tasks',
      { headers: { Authorization: token } });
    return tasksFromUser;
  } catch (err) {
    console.log(err);
  }
};

export const fetchUpdateTask = async (id, token, payload) => {
  try {
    const tasksFromUser = await api.put(`/tasks/${id}`,
      { ...payload },
      { headers: { Authorization: token } });
    return tasksFromUser;
  } catch (err) {
    console.log(err);
  }
};

export const fetchDeleteOneTask = async (id, token) => {
  try {
    const deleteResponse = await api.delete(`/tasks/${id}`,
      { headers: { Authorization: token } });
    return deleteResponse;
  } catch (err) {
    console.log(err);
  }
};
