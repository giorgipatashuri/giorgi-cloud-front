import axios, { InternalAxiosRequestConfig } from 'axios';
import { parseCookies } from 'nookies';

// const url = process.env.API_URL || 'http://localhost:8888/';

const url = process.env.API_URL 
axios.defaults.baseURL = url;

axios.interceptors.request.use((config: any): any => {
  if (typeof window !== 'undefined') {
    const { _token } = parseCookies();
    config.headers.Authorization = 'Bearer ' + _token;
  }
  return config;
});

export default axios;
