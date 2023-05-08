import React, { useState, useEffect, ChangeEvent, SetStateAction } from 'react';
import { checkedNickname, user } from 'dtos/userInfo';
import {
  getCheckedNick,
  getUserInfo,
  initUserState,
  updateImg,
  updateNickname,
} from 'apis/userInfo';
import { useAppDispatch, useAppSelect } from 'store/configureStore.hooks';
import { setAuthInfo } from 'store/modules/authInfo';

const useUserInfo = (): [
  user,
  React.Dispatch<SetStateAction<user>>,
  (e: ChangeEvent<HTMLInputElement>) => void,
  () => void,
] => {
  const [userInfo, setUserInfo] = useState<user>(initUserState);
  const dispatch = useAppDispatch();
  const originInfo = useAppSelect(state => state.authInfo.info);

  useEffect(() => {
    const getToken = localStorage.getItem('accessToken');
    getUserInfo(getToken!).then(res => setUserInfo(res));
  }, []);

  const handleChangeNickname = async () => {
    const checkedData = await getCheckedNick(userInfo.nickname);
    if (!checkedData.duplicated) {
      await updateNickname({ nickname: userInfo.nickname });
      return userInfo.nickname;
    }
    return alert('중복 되어있는 닉네임이 존재합니다.');
  };

  const handleChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (e.target.files[0].size <= 1024 * 1024 * 500) {
        try {
          const formData = new FormData();
          formData.append('file', e.target.files[0]);
          const data = await updateImg(formData);
          setUserInfo(prev => ({
            ...prev,
            profile_image_url: data.profile_image_url,
          }));
          console.log(data);
        } catch (e) {
          alert('사진 업로드 중 오류가 발생하였습니다.');
        }
      } else {
        alert('용량을 줄여주세요!');
      }
    }
  };

  const handleSaveClick = async () => {
    const newNickname = await handleChangeNickname();
    console.log(originInfo);
    if (typeof newNickname === 'string') {
      await dispatch(
        setAuthInfo({
          ...originInfo,
          nickname: newNickname,
          profile_image_url: userInfo.profile_image_url,
        }),
      );
      alert('정보가 수정되었습니다.');
    }
  };

  return [userInfo, setUserInfo, handleChangeImage, handleSaveClick];
};

export default useUserInfo;
