import React, { useState, useContext } from 'react';
import { ListContext } from '../../context';
import ModalContainer from '../../styles/Modal';
import Button from '../../styles/Button';
import styled from 'styled-components';

const BtnContainer = styled.div`
  display: flex;
`;

const ModalTitle = styled.p`
  font-size: 1.15rem;
  text-align: center;
`;

export const Modal = () => {
  const { isOpen, toggleModal, modalType, list, editList } = useContext(
    ListContext
  );
  const [title, setTitle] = useState('');

  //Event handlers
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTitleSubmit = (event) => {
    if (event.key === 'Enter') {
      editList(list.list_id, title);
    }
  };

  if (isOpen && modalType === 'OPEN')
    return (
      <ModalContainer>
        <ModalTitle>Open List</ModalTitle>

        <BtnContainer>
          <Button>Open List</Button>
          <Button colored onClick={toggleModal}>
            Close
          </Button>
        </BtnContainer>
      </ModalContainer>
    );
  else if (isOpen && modalType === 'EDIT') {
    return (
      <ModalContainer>
        <ModalTitle>Edit Title</ModalTitle>

        <input
          type="text"
          value={title}
          onKeyDown={handleTitleSubmit}
          onChange={handleTitleChange}
        ></input>
        <BtnContainer>
          <Button onClick={() => editList(list.list_id, title)}>
            Change Title
          </Button>
          <Button colored onClick={toggleModal}>
            Close
          </Button>
        </BtnContainer>
      </ModalContainer>
    );
  } else return null;
};
