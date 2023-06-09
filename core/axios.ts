import axios, { InternalAxiosRequestConfig } from 'axios';
import { parseCookies } from 'nookies';

axios.defaults.baseURL = 'https://panicky-bee-parka.cyclic.app/';

axios.interceptors.request.use((config: any): any => {
  if (typeof window !== 'undefined') {
    const { _token } = parseCookies();

    config.headers.Authorization = 'Bearer ' + _token;
  }
  return config;
});

export default axios;
