import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Njk3MjUzNzYsImV4cCI6MTY2OTgxMTc3Nn0.dElZ-s8veIE1Om0TNsq1vRxjKzy228rv71NcKEKt3Ut500KOSxMQANM3VCsDDDcQYzl1x9BEGmvM1U-xK37WgQ',
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
