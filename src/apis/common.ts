import axios, { AxiosRequestConfig } from 'axios';
import { useDispatch } from 'react-redux';

// 이게 상태값이 아니여서 그런듯
const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
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
    console.log(e);
    if (e.response.status === 401) {
      // alert('로그인 기간 만료');
      // 토큰 만료 시 처리
    }

    return Promise.reject(e);
  },
);

export default api;
