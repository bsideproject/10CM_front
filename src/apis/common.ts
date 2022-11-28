import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Njk2NDIzNjcsImV4cCI6MTY2OTcyODc2N30.BuoWuPtvRvudC216wQOy_IMfng3J9lip9vG8bMjHQHPtqwmmpmtSaHpFrLHar2Xp1KSiWUks4uUkhcSWSx7AJQ',
    // Authorization:
    //   'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NjgyMjQwODgsImV4cCI6MTY2ODMxMDQ4OH0.yc61a4gsbMGzJkpHVxjNNuiSLujCO-oDMXH1dDtkblixr9yNdhPGChwrzBeJS-lc7e404Hq-yDWLmruG4fw-iw',
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
