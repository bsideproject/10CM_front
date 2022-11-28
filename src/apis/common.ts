import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Njk1NTM0MzYsImV4cCI6MTY2OTYzOTgzNn0.rO-MurDS4LyKqFxf1mr5yEtrg17hzH8afCvvcRCosfiAqU32XFgjpgrHokw0M7Zb3x_fbY2D2pNTq5XoSCZcSQ',
  },
};
const api = axios.create(axiosConfig);
api.interceptors.request.use(
  config => {
    return config;
  },
  e => {
    return Promise.reject(e);
  },
);
api.interceptors.response.use(
  config => {
    return config;
  },
  e => {
    return Promise.reject(e);
  },
);

export default api;
