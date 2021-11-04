import axios from 'axios';

// https://blog.rocketseat.com.br/axios-um-cliente-http-full-stack/
const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export default api;
