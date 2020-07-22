import React, { useEffect, useContext } from 'react';
import { Item } from '../Item/Item';
import { ListContext } from '../../context';
import { useParams } from 'react-router-dom';
import Button from '../../styles/Button';

export const List = () => {
  const { fetchList, list } = useContext(ListContext);
  let { id } = useParams();

  useEffect(() => {
    fetchList(id);
  }, [id]);

  if (list) {
    return (
      <div>
        <h3 style={{ textAlign: 'center', fontSize: '2rem' }}>{list.name}</h3>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button>Edit Name</Button>
          <Button colored>Copy Link</Button>
        </div>
        <div>
          {list.items.map((item) => (
            <Item data={item}></Item>
          ))}
        </div>

        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button colored>Add Item</Button>
        </div>
      </div>
    );
  } else return null;
};
