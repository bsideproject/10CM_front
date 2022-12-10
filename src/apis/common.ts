import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1Iiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzA2NDQ3MjAsImV4cCI6MTY3MDczMTEyMH0.L9oQnnVBLrvtwHDC1F8l2iVH-gQncmcEyeKEv1UkFHCv9lGkotb8KV3r0wx2CFIGih8_kZ75XnTw63HQ8WJUng',
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
