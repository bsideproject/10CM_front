import {
  CreatePlaceBody,
  MyPlaceListQueryParams,
  MyPlaceListResponse,
  MyPlaceResponse,
  UpdatePlaceBody,
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
export const getPlaceList = async (params: MyPlaceListQueryParams) => {
  const { data } = await api.get<MyPlaceListResponse>(url, { params });
  return data;
};

/**
 * 내가 등록한 장소 상세
 */
export const getPlace = async (id: number) => {
  const { data } = await api.get<MyPlaceResponse>(`${url}/${id}`);
  return data;
};

/**
 * 장소 수정
 */
export const updatePlace = async (body: UpdatePlaceBody) => {
  const { id, ...rest } = body;
  await api.put(`${url}/${id}`, rest);
};

/**
 * 장소 삭제
 */
export const deletePlace = async (id: number) => {
  await api.delete(`${url}/${id}`);
};
