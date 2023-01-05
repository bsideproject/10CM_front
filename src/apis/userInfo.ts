import { user } from 'dtos/userInfo';
import api from './common';

const url = '/api/v1/user';

export const getUserInfo = async () => {
  const { data } = await api.get<user>(url);
  return data;
};
