import axios, { AxiosRequestConfig } from 'axios';

export const { APP_CONFIG } = window;

const baseURL = APP_CONFIG.ENV === 'dev' ? APP_CONFIG.DEV_SERVER_URL : APP_CONFIG.SERVER_URL;

const $api = axios.create({
  baseURL,
});

const handleRequest = (config: AxiosRequestConfig) => {
  // config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

  return config;
};

$api.interceptors.request.use(handleRequest);

export default $api;
