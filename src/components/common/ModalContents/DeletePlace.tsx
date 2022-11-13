import DeletePlaceContainer from 'components/ModalContents/DeletePlaceContainer';
import ModalButton from 'components/ModalContents/ModalButton';
import Modal from 'components/UI/Modal';
import React from 'react';
import * as CFG from 'services/config.js';

const DeletePlace: React.FC = () => {
  const { DELETE } = CFG.MODAL_MYPLACE;

  return (
    <Modal onClose={() => {}} bodyStyle="DELETE_PLACE">
      <DeletePlaceContainer headerText={DELETE.headerText} />
      <ModalButton btnText={DELETE.btnText} btnSize="medium" btnWidth="76px" />
    </Modal>
  );
};

export default DeletePlace;
