import React, { createContext, useState, useEffect } from 'react';

export const ListContext = createContext();

let listOfItems = [
  {
    description: 'test1',
    id: 1,
    isCompleted: false,
  },
  {
    description: 'test2',
    id: 2,
    isCompleted: true,
  },
];

let dummyList = { name: 'List1', items: listOfItems };

const ListProvider = ({ children }) => {
  const [list, setList] = useState(null);
  const [isOpen, toggle] = useState(false);
  const [modalType, setModalType] = useState('');

  function toggleModal(typeOfModal) {
    toggle(!isOpen);
    setModalType(typeOfModal);
  }

  async function createList() {
    const response = await fetch(
      'https://node-list-share.herokuapp.com/api/list/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Unnamed List' }),
      }
    );

    console.log(response);
  }

  async function fetchList(listId) {
    setList(dummyList);
  }

  async function editList(listId) {}

  async function addItem(listId) {}

  async function markItem(itemId) {}

  async function editItem(itemId) {}

  async function deleteItem(itemId) {}

  return (
    <ListContext.Provider
      value={{
        isOpen,
        toggleModal,
        modalType,
        list,
        createList,
        fetchList,
        addItem,
        markItem,
        editItem,
        addItem,
        deleteItem,
        editList,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
