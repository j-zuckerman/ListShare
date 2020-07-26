import React, { createContext, useState, useEffect } from 'react';

export const ListContext = createContext();

const ListProvider = ({ children }) => {
  const [list, setList] = useState(null);
  const [listId, setListId] = useState(null);
  const [items, setItems] = useState(null);

  const [isOpen, toggle] = useState(false);
  const [modalType, setModalType] = useState('');

  function toggleModal(typeOfModal) {
    toggle(!isOpen);
    setModalType(typeOfModal);
  }

  async function createList() {
    const listResponse = await fetch(
      'https://node-list-share.herokuapp.com/api/list/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Unnamed List' }),
      }
    );
    let listData = await listResponse.json();
    console.log(listData);
    setListId(listData.list_id);

    const itemResponse = await fetch(
      `https://node-list-share.herokuapp.com/api/list/${listData.list_id}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Unnamed item', isDone: 'false' }),
      }
    );
    console.log(itemResponse);
  }

  async function fetchList(id) {
    const listResponse = await fetch(
      `https://node-list-share.herokuapp.com/api/list/${id}`
    );
    let listData = await listResponse.json();
    console.log(listData);
    setList(listData);
    console.log(list);

    const itemResponse = await fetch(
      `https://node-list-share.herokuapp.com/api/list/${id}/items`
    );
    let itemData = await itemResponse.json();
    console.log(itemData);
    setItems(itemData);
  }

  async function editList(id, listTitle) {
    const response = await fetch(
      `https://node-list-share.herokuapp.com/api/list/${id}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: listTitle }),
      }
    );

    setList({ ...list, list_title: listTitle });
  }

  async function addItem(id) {
    const response = await fetch(
      `https://node-list-share.herokuapp.com/api/list/${id}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Unnamed item', isDone: 'false' }),
      }
    );
    let data = await response.json();
    setItems((items) => [...items, data]);
  }

  async function editItem(id, isDone, name) {
    const response = await fetch(
      `https://node-list-share.herokuapp.com/api/items/${id}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isDone, name }),
      }
    );

    setItems(
      items.map((item) =>
        item.item_id === id
          ? { ...item, isdone: isDone, item_name: name }
          : item
      )
    );
  }

  async function deleteItem(id) {
    const response = await fetch(
      `https://node-list-share.herokuapp.com/api/items/${id}`,
      {
        method: 'DELETE',
      }
    );

    setItems(items.filter((item) => item.item_id !== id));
  }

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
        editItem,
        addItem,
        deleteItem,
        editList,
        items,
        listId,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
