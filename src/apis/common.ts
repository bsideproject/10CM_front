import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NjkyOTI0NDQsImV4cCI6MTY2OTM3ODg0NH0.ERJSXpYVlnb-LmvF7pUsriTMSOSjxRWSnmztqcdNaiDwe5iXFbGhWxU0gUW1GL9bR0aD6LdsRICH9S4L5MT95Q',
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
