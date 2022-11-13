import LeaveBtn from 'components/ModalContents/LeaveBtn';
import LeavePageParagraph from 'components/ModalContents/LeavePageParagraph';
import Modal from 'components/UI/Modal';
import React from 'react';

const LeavePage: React.FC = () => {
  return (
    <Modal onClose={() => {}} bodyStyle="LEAVE_PAGE">
      <LeavePageParagraph />
      <LeaveBtn />
    </Modal>
  );
};

export default LeavePage;
