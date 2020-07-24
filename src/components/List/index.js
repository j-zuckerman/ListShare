import React, { useEffect, useContext } from 'react';
import { Item } from '../Item/Item';
import { ListContext } from '../../context';
import { useParams } from 'react-router-dom';
import Button from '../../styles/Button';

export const List = () => {
  const { list, items, toggleModal, fetchList } = useContext(ListContext);
  let { id } = useParams();

  useEffect(() => {
    fetchList(id);
  }, [id]);

  if (list !== null && items !== null)
    return (
      <div>
        <h3 style={{ textAlign: 'center', fontSize: '2rem' }}>
          {list.list_title}
        </h3>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={() => toggleModal('EDIT')}>Edit Title</Button>
          <Button colored>Copy Link</Button>
        </div>
        <div></div>
        {items.map((item) => (
          <Item data={item}></Item>
        ))}
        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button colored onClick={() => toggleModal('ADD')}>
            Add Item
          </Button>
        </div>
      </div>
    );
  else return null;
};
