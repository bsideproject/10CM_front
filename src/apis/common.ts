import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  //   baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NjgzMzQzOTIsImV4cCI6MTY2ODQyMDc5Mn0.lj07m-XDDPj0Ny1MYj10en2o1feLqQp-l7pqCZIh3CvDt6gnVzDmVukmkOCxyHCoJeixfpz65riclKB7jXlMMQ',
    // Authorization:
    //   'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NjgyMjQwODgsImV4cCI6MTY2ODMxMDQ4OH0.yc61a4gsbMGzJkpHVxjNNuiSLujCO-oDMXH1dDtkblixr9yNdhPGChwrzBeJS-lc7e404Hq-yDWLmruG4fw-iw',
  },
};
const api = axios.create(axiosConfig);
api.interceptors.request.use(
  config => {
    console.log('요청 전', config);
    return config;
  },
  e => {
    console.log('요청 전e', e);
    return Promise.reject(e);
  },
);
api.interceptors.response.use(
  config => {
    console.log('응답 전e', config);
    return config;
  },
  e => {
    console.log('응답 전e', e);
    return Promise.reject(e);
  },
);

export default api;
