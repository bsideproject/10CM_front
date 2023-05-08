import { checkedNickname, updateUser, user } from 'dtos/userInfo';
import axios from 'axios';
import api from './common';

const url = 'api/v1/user';

export const initUserState: user = {
  user_id: -1,
  nickname: '',
  name: '',
  email: '',
  profile_image_url: '',
};

export const getUserInfo = async (accToken: string) => {
  const sumUrl = process.env.REACT_APP_API_URL + url;
  const headers = {
    headers: { Authorization: `Bearer ${accToken}` },
  };
  const { data } = await axios.get(sumUrl, headers);
  // const { data } = await api.get<user>(url);
  return data;
};

export const getCheckedNick = async (nickname: string) => {
  const { data } = await api.get<user>(
    `${url}/profile/nickname-check?nickname=${nickname}`,
  );
  return data;
};

export const updateNickname = async (nickname: updateUser) => {
  const { data } = await api.post(`${url}/profile/nickname-update`, nickname);
  return data;
};

export const updateImg = async (form: FormData) => {
  const { data } = await api.post(`${url}/profile/image-upload`, form);
  return data;
};

export const withdrawalUser = async () => {
  const { data } = await api.delete(url);
  return data;
};
