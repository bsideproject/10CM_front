import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
    Authorization:
<<<<<<< HEAD
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NjkyOTI0NDQsImV4cCI6MTY2OTM3ODg0NH0.ERJSXpYVlnb-LmvF7pUsriTMSOSjxRWSnmztqcdNaiDwe5iXFbGhWxU0gUW1GL9bR0aD6LdsRICH9S4L5MT95Q',
=======
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NjkyMTM2NTUsImV4cCI6MTY2OTMwMDA1NX0.1Co_9qJZu5Ag7ho8KjES5AjpvzSwJyYh7DryT9o04jpSYk8xpBcTlWgATaE-BTOsaQ5aj9nzOYnEEmqPdFC9dw',
    // Authorization:
    //   'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NjgyMjQwODgsImV4cCI6MTY2ODMxMDQ4OH0.yc61a4gsbMGzJkpHVxjNNuiSLujCO-oDMXH1dDtkblixr9yNdhPGChwrzBeJS-lc7e404Hq-yDWLmruG4fw-iw',
>>>>>>> 547a697234c8139d31b43f4c7d8317d475644301
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
