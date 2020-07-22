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

  function toggleModal() {
    toggle(!isOpen);
  }

  async function createList() {}

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
