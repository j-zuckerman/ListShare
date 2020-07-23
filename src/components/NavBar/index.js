import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from '../Modal';
import { ListContext } from '../../context';
import Navbar from '../../styles/Navbar';
import Button from '../../styles/Button';

export const NavBar = () => {
  const { list, createList, isOpen, toggleModal } = useContext(ListContext);

  const history = useHistory();

  const navigateToListPage = () => {
    createList();
    history.push('/list/1');
  };

  return (
    <>
      <Modal></Modal>
      <Navbar>
        <Navbar.LeftSide>
          <h2>Share A List</h2>
        </Navbar.LeftSide>
        <Navbar.RightSide>
          <Button colored onClick={navigateToListPage}>
            New List
          </Button>
          <Button onClick={() => toggleModal('OPEN')}>Open List</Button>
        </Navbar.RightSide>
      </Navbar>
    </>
  );
};
