import LeaveBtn from 'components/ModalContents/LeaveBtn';
import LeavePageParagraph from 'components/ModalContents/LeavePageParagraph';
import Modal from 'components/UI/Modal';
import React from 'react';
import styled from 'styled-components';
import { colors } from 'constants/colors';

const LeavePage: React.FC = () => {
  return (
    <Modal onClose={() => {}}>
      <Wrap>
        <LeavePageParagraph />
        <LeaveBtn />
      </Wrap>
    </Modal>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 282px;
  border-radius: 4px;
  padding: 32px;
  gap: 8px;
  background-color: ${colors.WHITE};
`;

export default LeavePage;
