import DeletePlaceContainer from 'components/ModalContents/DeletePlaceContainer';
import ModalButton from 'components/ModalContents/ModalButton';
import Modal from 'components/UI/Modal';
import React from 'react';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import * as CFG from 'services/config.js';

const DeletePlace: React.FC = () => {
  const { DELETE } = CFG.MODAL_MYPLACE;

  return (
    <Modal onClose={() => {}}>
      <Wrap>
        <DeletePlaceContainer headerText={DELETE.headerText} />
        <ModalButton
          btnText={DELETE.btnText}
          btnSize="medium"
          btnWidth="76px"
        />
      </Wrap>
    </Modal>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  border-radius: 4px;
  padding: 24px;
  gap: 8px;
  background-color: ${colors.WHITE};
`;

export default DeletePlace;
