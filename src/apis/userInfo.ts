import { user } from 'dtos/userInfo';
import api from './common';

const url = '/api/v1/user';

export const initUserState: user = {
  user_id: -1,
  nickname: '',
  name: '',
  email: '',
  profile_image_url: '',
};

export const getUserInfo = async () => {
  const { data } = await api.get<user>(url);
  return data;
};

export const getCheckedNick = async () => {
  const { data } = await api.get<user>(`${url}/profile/nickname-check`);
  return data;
};
