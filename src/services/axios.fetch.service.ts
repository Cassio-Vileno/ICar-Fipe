import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL,
  timeout: 23000,
  timeoutErrorMessage: 'Não foi possivel se conectar com servidor',
});

export default api;
