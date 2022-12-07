import { MyTripListResponse, MyTripRequest, MyTripDelete } from '../dtos/trip';
import api from './common';

const url = '/api/v1/trip';

export const createTrip = async (body: MyTripRequest) => {
  await api.post(url, body).then(res => console.log(res));
};

export const getTripList = async () => {
  const { data } = await api.get<MyTripListResponse>(url);
  return data;
};

export const deleteTrip = async (tripId: number) => {
  await api.delete(`${url}/${tripId}`);
};

export const getDetailTrip = async (id: number) => {
  const { data } = await api.get(`${url}/${id}`);
  return data;
};

export const updateTrip = async (id: number, body: MyTripRequest) => {
  await api.put(`${url}/${id}`, body).then(res => console.log(res));
};

// export const getPlace = async (id: number) => {
//   const { data } = await api.get<MyPlaceResponse>(`${url}/${id}`);
//   return data;
// };
