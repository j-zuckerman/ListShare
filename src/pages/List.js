import React from 'react';
import ListContainer from '../styles/List';
import { NavBar } from '../components/NavBar';
import { List } from '../components/List';

export const ListPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <ListContainer>
        <List></List>
      </ListContainer>
    </>
  );
};
