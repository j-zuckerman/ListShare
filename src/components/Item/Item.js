import React, { useState, useContext } from 'react';
import ItemContainer from '../../styles/Item';
import Description from '../../styles/Item/Description';
import Checkbox from '../../styles/Item/Checkbox';
import { ListContext } from '../../context';
import { FaTrashAlt } from 'react-icons/fa';

export const Item = ({ data }) => {
  const { editItem, deleteItem } = useContext(ListContext);
  const [name, setName] = useState(data.item_name);
  const [isDone, setDone] = useState(data.isdone);

  const handleCheckboxChange = (event) => {
    setDone(event.target.checked);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    if (event.key === 'Enter') editItem(data.item_id, isDone, name);
  };

  const handleDelete = () => {
    deleteItem(data.item_id);
  };

  return (
    <ItemContainer>
      <Checkbox checked={isDone} onChange={handleCheckboxChange} />
      <Description
        value={name}
        onChange={handleNameChange}
        onKeyDown={handleSubmit}
      />
      <button
        style={{
          border: 'none',
          padding: 'none',
          outline: 'none',
          marginLeft: 'auto',
        }}
        onClick={handleDelete}
      >
        <FaTrashAlt />
      </button>
    </ItemContainer>
  );
};
