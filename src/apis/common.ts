import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: '',
  },
};
const axiosCFG = axios.create(axiosConfig);
axiosCFG.interceptors.request.use(
  e => {
    console.log('e', e);
  },
  e => {
    console.log('e', e);
  },
);
axiosCFG.interceptors.response.use(
  e => {
    console.log('e', e);
  },
  e => {
    console.log('e', e);
  },
);

interface Test {
  hi: string;
}

const test = async () => {
  const data = await axiosCFG.get<Test>('');
};
export default axiosCFG;
