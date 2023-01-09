import React, { useState } from 'react';
import styled from 'styled-components';

import Img from 'components/Img/Img';

import { sizes } from 'constants/sizes';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
import { useNavigate } from 'react-router-dom';
import LogoutModal from 'components/common/ModalContents/LogoutModal';
import Toast from 'components/common/Toast';
interface IProps {
  img: string;
  text: string;
  route?: string;
  isNav?: boolean;
}

const ImgItem: React.FC<IProps> = ({ img, text, route, isNav }) => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem('accessToken');
  const [onLogoutModal, setOnLogoutModal] = useState(false);
  const [onToast, setOnToast] = useState(false);

  const handleClickList = () => {
    if (text === '로그아웃') {
      if (isLogin) {
        setOnLogoutModal(!onLogoutModal);
        return;
      }
      setOnToast(true);
      setTimeout(() => {
        setOnToast(false);
      }, 1500);
      return;
    }

    if (route) {
      navigate(route);
    }
  };

  return (
    <ListItem isNav={isNav} onClick={handleClickList}>
      <Img src={img} width={sizes.NAV_IMGS_SIZE} height={sizes.NAV_IMGS_SIZE} />
      {isNav && <ListText>{text}</ListText>}
      {onLogoutModal && (
        <LogoutModal onClose={() => setOnLogoutModal(!onLogoutModal)} />
      )}
      {onToast && <Toast toastText="로그인 후 이용이 가능합니다." />}
    </ListItem>
  );
};

const ListItem = styled.li<{ isNav?: boolean | undefined }>`
  width: ${props => (props.isNav ? 'calc(188px - 32px)' : '64px')};
  padding: ${props => props.isNav && '0 16px'};
  height: 48px;
  display: flex;
  justify-content: ${props => (props.isNav ? 'row' : 'center')};
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  color: ${colors.NEUTRAl_700};
  &:hover {
    color: ${colors.BLUE_BASE};
    background-color: ${colors.NEUTRAl_50};
  }
`;

const ListText = styled.span`
  ${fonts('text-xs')}
  height: 26px;
  letter-spacing: 0.013em;
  margin-left: 12px;
`;

export default ImgItem;
