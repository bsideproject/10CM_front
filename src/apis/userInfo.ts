import { user } from 'dtos/userInfo';
import axios from 'axios';
import api from './common';

const url = '/api/v1/user';

export const getUserInfo = async (accToken: string) => {
  const { data } = await axios.get<user>(url, {
    headers: {
      Authorization: `Bearer ${accToken}`,
      'content-type': 'application/json',
    },
  });
  return data;
};
