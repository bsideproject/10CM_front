import ModalButton from 'components/ModalContents/ModalButton';
import Modal from 'components/UI/Modal';
import { colors } from 'constants/colors';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setAuthInfo, info } from 'store/modules/authInfo';
import { useNavigate } from 'react-router-dom';
import { routePath } from 'constants/route';
import { persistor } from 'index';
import { fonts } from 'assets/fonts/fonts';
interface IProps {
  onClose: () => void;
}

const LogoutModal: React.FC<IProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickLogout = async () => {
    const initUserInfo = info;
    localStorage.clear();
    dispatch(setAuthInfo(initUserInfo));
    persistor.purge().then(() => {
      onClose();
      navigate(routePath.INTRO);
    });
  };

  return (
    <Modal onClose={onClose}>
      <Wrap>
        <LogoutText>정말로 로그아웃 하시겠습니까?</LogoutText>
        <ModalButton
          btnText="확인"
          btnSize="small"
          btnWidth="67px"
          onClose={onClose}
          onClick={handleClickLogout}
          isLogout
        />
      </Wrap>
    </Modal>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  gap: 8px;
  background-color: ${colors.WHITE};
  border-radius: 4px;
`;

const LogoutText = styled.span`
  ${fonts('text-sm-regular')};
  letter-spacing: 0.013em;
  color: ${colors.NEUTRAl_600};
`;

export default LogoutModal;
