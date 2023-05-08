export interface user {
  [x: string]: any;
  user_id: number;
  name: string;
  nickname: string;
  email: string;
  profile_image_url: string;
}

export type updateUser = {
  nickname: string;
};

export interface checkedNickname {
  nickname: string;
  duplicated: boolean;
}
