import { CreatePlaceBody, MyPlacesResponse } from 'dtos/place';
import api from './common';

/**
 * 장소 등록
 */
const url = '/api/v1/place';
export const createPlace = async (body: CreatePlaceBody) => {
  await api.post(url, body);
};

/**
 * 내가 등록한 모든 장소
 */
export const getPlaces = async () => {
  const { data } = await api.get<MyPlacesResponse>(url);
  return data;
};
