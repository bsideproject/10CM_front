import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1Iiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzA1ODIzODUsImV4cCI6MTY3MDY2ODc4NX0.JvJ3HSQ7iapX69kgNwZdq-V3BKdLxHxck8Zd8WXm6WN-6FP4HdIGJpl6oD9Gz8CXNV-3leiOSIEWuDsh5jbg1Q',
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
