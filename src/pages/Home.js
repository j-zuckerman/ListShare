import React, { useState, useContext } from 'react';
import Button from '../styles/Button';
import { useHistory } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Modal } from '../components/Modal';
import { ListContext } from '../context';

const Home = () => {
  const { list, createList, isOpen, toggleModal } = useContext(ListContext);

  const history = useHistory();

  const navigateToListPage = () => {
    createList();
    history.push('/list/1');
  };

  return (
    <>
      <NavBar></NavBar>
      <main style={{ marginTop: '6.5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.8rem' }}>
          A quick and easy way to share any type of list.
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button large colored onClick={navigateToListPage}>
            Create New List
          </Button>
          <p> OR</p>
          <Button large onClick={toggleModal}>
            Open Existing List
          </Button>
        </div>
      </main>
    </>
  );
};

export default Home;
