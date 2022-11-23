import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  //   baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NjkyMTM2NTUsImV4cCI6MTY2OTMwMDA1NX0.1Co_9qJZu5Ag7ho8KjES5AjpvzSwJyYh7DryT9o04jpSYk8xpBcTlWgATaE-BTOsaQ5aj9nzOYnEEmqPdFC9dw',
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
