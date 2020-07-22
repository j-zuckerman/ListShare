import React, { createContext, useState, useEffect } from 'react';

export const ListContext = createContext();

const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [isOpen, toggle] = useState(false);

  function toggleModal() {
    toggle(!isOpen);
  }

  async function createList() {}

  async function fetchList(listId) {}

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
