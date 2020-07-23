import React, { useState, useContext } from 'react';
import { ListContext } from '../../context';
import ModalContainer from '../../styles/Modal';
import Button from '../../styles/Button';

export const Modal = () => {
  const { isOpen, toggleModal, modalType } = useContext(ListContext);

  if (isOpen && modalType === 'OPEN')
    return (
      <ModalContainer>
        <p>Open List</p>

        <Button></Button>
        <Button colored onClick={toggleModal}>
          Close
        </Button>
      </ModalContainer>
    );
  else if (isOpen && modalType === 'ADD') {
    return (
      <ModalContainer>
        <p>Add Item</p>

        <Button></Button>
        <Button colored onClick={toggleModal}>
          Close
        </Button>
      </ModalContainer>
    );
  } else if (isOpen && modalType === 'EDIT') {
    return (
      <ModalContainer>
        <p>Edit Title</p>

        <Button></Button>
        <Button colored onClick={toggleModal}>
          Close
        </Button>
      </ModalContainer>
    );
  } else return null;
};
