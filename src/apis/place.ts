import {
  CreatePlaceBody,
  MyPlaceListResponse,
  MyPlaceResponse,
} from 'dtos/place';
import api from './common';

/**
 * 장소 등록
 */
const url = '/api/v1/place';
export const createPlace = async (body: CreatePlaceBody) => {
  const { data } = await api.post<{ id: number }>(url, body);
  return data;
};

/**
 * 내가 등록한 모든 장소
 */
export const getPlaceList = async () => {
  const { data } = await api.get<MyPlaceListResponse>(url);
  return data;
};

/**
 * 내가 등록한 장소 상세
 */
export const getPlace = async (id: number) => {
  const { data } = await api.get<MyPlaceResponse>(`${url}/${id}`);
  return data;
};
