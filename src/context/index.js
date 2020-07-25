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
    console.log(id, isDone, name);
    console.log(items);
    setItems(
      items.map((item) =>
        item.item_id === id
          ? { ...item, isdone: isDone, item_name: name }
          : item
      )
    );
  }

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
