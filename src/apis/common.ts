import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1Iiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Njk5Njc5MDQsImV4cCI6MTY3MDA1NDMwNH0.otVKY9qU9a3gBThimBiKT-sB4ADj-uzQwTWqMF4kNNX_z_M6VBcQIQHYFHRj-WL325zc44pLmjWhv39EB-hGJA',
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
