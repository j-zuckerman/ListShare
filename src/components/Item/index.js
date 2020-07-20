import React from 'react';
import { Item } from './Item';

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
