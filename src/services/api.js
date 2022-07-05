import axios from 'axios';
import 'dotenv/config';
import { getToken } from './auth';

const { URL_API, PORT_API } = process.env;

const api = axios.create({
  baseURL: `${URL_API}:${PORT_API}` || 'http://localhost:3001',
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
