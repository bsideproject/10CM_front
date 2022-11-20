import api from './common';

/**
 * 이미지 등록
 */
const url = '/api/v1/resources';

export const uploadImage = async (form: FormData) => {
  const { data } = await api.post<string>(url, form);
  console.log(data);
  // const stringList = data.split('/');
  // const test = await getImageId(stringList[stringList.length - 1]);
};

const getImageId = async (imageName: string) => {
  const { data } = await api.get(`${url}/${imageName}`);
  console.log(data);
};
