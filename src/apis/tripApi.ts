import { MyTripListResponse, MyTripReqeust, MyTripDelete } from '../dtos/trip';
import api from './common';

const url = '/api/v1/trip';

export const createTrip = async (body: MyTripReqeust) => {
  await api.post(url, body).then(res => console.log(res));
};

export const getTripList = async () => {
  const { data } = await api.get<MyTripListResponse>(url);
  return data;
};

export const deleteTrip = async (body: MyTripDelete) => {
  const data = { data: { trip_id: body } };
  await api.delete(url, data);
};

export const getDetailTrip = async (id: number) => {
  const { data } = await api.get(`${url}/${id}`);
  return data;
};

// export const getPlace = async (id: number) => {
//   const { data } = await api.get<MyPlaceResponse>(`${url}/${id}`);
//   return data;
// };
