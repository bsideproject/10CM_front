import { Image } from 'dtos/common';
import api from './common';

/**
 * 이미지 등록
 */
const url = '/api/v1/resources';

export const uploadImage = async (form: FormData) => {
  const { data } = await api.post<Image>(url, form);
  return data;
};
