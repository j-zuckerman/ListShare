import React from 'react';
import { Item } from './Item';

export const Items = () => {
  //fetch all the items for a list given it's id

  return (
    <div>
      {listOfItems.map((item) => (
        <Item key={item.id} data={item}></Item>
      ))}
    </div>
  );
};
