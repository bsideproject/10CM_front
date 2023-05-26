import axios, { AxiosRequestConfig } from 'axios';

const accToken = localStorage.getItem('accessToken');
const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${accToken}`,
  },
};

const api = axios.create(axiosConfig);
api.interceptors.request.use(
  config => {
    return config;
  },
  e => {
    console.log(e);
    return Promise.reject(e);
  },
);
api.interceptors.response.use(
  config => {
    return config;
  },
  e => {
    console.log(e);
    if (e.response.status === 401 && accToken) {
      alert('로그인이 만료되었습니다.');
      localStorage.setItem('expirationToken', 'true');
      window.location.replace('https://unzido.site/intro');
      // alert('로그인 기간 만료');
      // 토큰 만료 시, localstorage에 여부 기입 후 인트로 페이지로 일단 이동
      // 인트로 페이지에서 로그아웃 진행
    }

    return Promise.reject(e);
  },
);

export default api;
