export interface MyTripDetail {
  address: string;
  address_detail: string;
  description: string;
  latitude: string;
  longitude: string;
  phone: string;
  id: string;
  name: string;
}

export interface MyTripRequest {
  description: string;
  end_date: string;
  name: string;
  share_yn: string;
  start_date: string;
  trip_details: MyTripDetail[][];
  trip_id?: number;
  trip_image_url?: string | null;
  created_date?: string;
  modified_date?: string | null;
}

export interface MyTrip {
  trip_image_url?: string;
  created_date: string;
  description: string;
  end_date: string;
  modified_date: string;
  name: string;
  share_yn: string;
  start_date: string;
  trip_id: number;
  trip_image_name?: string;
}

export interface MyTripListResponse {
  data: MyTrip[];
  first: boolean;
  last: boolean;
  page: number;
  size: number;
  total_pages: number;
}

export interface MyTripDelete {
  trip_id: number;
}
