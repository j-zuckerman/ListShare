import React from 'react';
import Button from '../styles/Button';
import { Link } from 'react-router-dom';
import { NavBar } from '../components/NavBar';

const Home = () => {
  return (
    <main>
      <NavBar></NavBar>
      <h1>Share lists</h1>
      <Button as={Link} to="/list/1">
        Create New List
      </Button>
      <Button>Open Existing List</Button>
    </main>
  );
};

export default Home;
