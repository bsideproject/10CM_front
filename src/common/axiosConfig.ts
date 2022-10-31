import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'BASE_URL'
}
const axiosCFG = axios.create(axiosConfig);

export default axiosCFG;