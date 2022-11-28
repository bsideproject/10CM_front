export interface MyTripDetail {
  address: string;
  address_detail: string;
  description: string;
  latitude: string;
  longitude: string;
  name: string;
}

export interface MyTripReqeust {
  description: string;
  end_date: string;
  name: string;
  share_yn: string;
  start_date: string;
  trip_details: MyTripDetail[][];
}

export interface MyTrip {
  created_date: string;
  description: string;
  end_date: string;
  modified_date: string;
  name: string;
  share_yn: string;
  start_date: string;
  trip_id: number;
}

export interface MyTripListResponse {
  data: MyTrip[];
  first: boolean;
  last: boolean;
  page: number;
  size: number;
  total_pages: number;
}
