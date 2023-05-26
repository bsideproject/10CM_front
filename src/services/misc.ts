import { KakaoAddress } from 'dtos/kakao';
import { MyPlaceResponse } from 'dtos/place';
import { MyTripDetail } from 'dtos/trip';
type SplitType = 'dash' | 'dot';
const DATE_ONE_DAY = 86400000;

export const convertDate = (date: Date, type: SplitType): string => {
  const splitDate = date.toLocaleDateString().split('.');
  if (type === 'dash') {
    return `${splitDate[0]}-${splitDate[1].slice(1)}-${splitDate[2].slice(1)}`;
  }
  return `${splitDate[0]}.${splitDate[1]}.${splitDate[2]} `;
};

export const initFromDate = convertDate(new Date(), 'dash');

export const initToDate = convertDate(
  new Date(new Date().getTime() + 1000 * 60 * 60 * 24),
  'dash',
);

export const diffDay = (from: string, to: string) => {
  const getFrom = new Date(from).getTime();
  const getTo = new Date(to).getTime();
  return Math.ceil((getTo - getFrom) / DATE_ONE_DAY + 1);
};

export const convertGetDay = (day: number) => {
  if (day === -1) {
    return '토';
  }
  const map = new Map()
    .set(0, '일')
    .set(1, '월')
    .set(2, '화')
    .set(3, '수')
    .set(4, '목')
    .set(5, '금')
    .set(6, '토');
  return map.get(day);
};

export const convertPickDay = (date: string, pickedDay: number) => {
  const getTime = new Date(date).getTime();
  const addNumDay = DATE_ONE_DAY * (pickedDay - 1);
  const calDate = new Date(getTime + addNumDay);
  return `${calDate.getMonth() + 1}.${calDate.getDate()}(${convertGetDay(
    calDate.getDay(),
  )})`;
};

export const convertTripDetails = (data: KakaoAddress[][]) => {
  console.log(data);
  const convertData = data.map(arr =>
    arr.map(el => {
      return {
        latitude: el.y,
        longitude: el.x,
        description: '',
        name: el.place_name,
        phone: el.phone,
        id: el.id,
        address: el.road_address_name,
        address_detail: el.address_name,
      };
    }),
  );

  return convertData;
};

export const convertTripDate = (startDate: string, endDate: string) => {
  const start = startDate.replaceAll('-', '.');
  const end = endDate.slice(5).replace('-', '.');
  return `${start} - ${end}`;
};

export const addZero = (date: string) => {
  const splitArr = date.split('-');
  const data = splitArr.map(el => {
    if (el.length === 1) {
      return `0${el}`;
    }
    return el;
  });
  return `${data[0]}-${data[1]}-${data[2]}`;
};

export const updateAddrData = (data: MyTripDetail[][]) => {
  return data.map(dayData =>
    dayData.map(el => {
      return {
        road_address_name: el.address,
        address_name: el.address_detail,
        x: el.longitude,
        y: el.latitude,
        id: el.id,
        place_name: el.name,
        phone: el.phone || '',
        description: el.description,
      };
    }),
  );
};

export const convertPlaceData = (data: MyPlaceResponse[]) => {
  return data.map(place => {
    return {
      phone: place.phone || '',
      id: String(place.id),
      address_name: place.address,
      road_address_name: place.address,
      place_name: place.name,
      x: place.longitude,
      y: place.latitude,
      description: place.description,
      image: place.image,
    };
  });
};
// x = longtidue 경도
// y = latitude 위도
