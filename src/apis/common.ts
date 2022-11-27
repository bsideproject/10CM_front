import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  //   baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2Njk1NTEzNTUsImV4cCI6MTY2OTYzNzc1NX0.Gqa2YTd96T6WaWSTEbzBC9LIXzS_xljigoVuGGM-gtcvJQ05NKv5uZlvhJUgfFXcl7A5tRruZ6XeyMzS30k0hQ',
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
