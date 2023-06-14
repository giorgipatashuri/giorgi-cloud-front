import axios, { InternalAxiosRequestConfig } from 'axios';
import { parseCookies } from 'nookies';

const url = process.env.URL || 'http://localhost:8888/';

axios.defaults.baseURL = url;

axios.interceptors.request.use((config: any): any => {
  if (typeof window !== 'undefined') {
    const { _token } = parseCookies();
    console.log(_token);
    config.headers.Authorization = 'Bearer ' + _token;
  }
  return config;
});

export default axios;
