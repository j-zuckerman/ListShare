import React, { useState, useContext } from 'react';
import { ListContext } from '../../context';
import ModalContainer from '../../styles/Modal';

export const Modal = () => {
  const { isOpen, toggleModal } = useContext(ListContext);

  if (isOpen)
    return (
      <ModalContainer>
        <p>Hello modal.</p>
        <button onClick={toggleModal}>Close</button>
      </ModalContainer>
    );
  else return null;
};
