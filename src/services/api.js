import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  const configAxios = config;
  if (token) {
    configAxios.headers.Authorization = token;
  }
  return configAxios;
});

export default api;

// Credits: https://blog.rocketseat.com.br/reactjs-autenticacao/
