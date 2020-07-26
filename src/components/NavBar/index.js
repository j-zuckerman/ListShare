import React, { useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Modal } from '../Modal';
import { ListContext } from '../../context';
import Navbar from '../../styles/Navbar';
import Button from '../../styles/Button';
import { FaExternalLinkAlt, FaPlus } from 'react-icons/fa';

export const NavBar = () => {
  const { list, listId, createList, isOpen, toggleModal } = useContext(
    ListContext
  );

  useEffect(() => {
    createList();
  }, [listId]);

  const history = useHistory();

  const navigateToListPage = () => {
    history.push(`/list/${listId}`);
  };

  if (listId !== null)
    return (
      <>
        <Modal></Modal>
        <Navbar>
          <Navbar.LeftSide>
            <Link
              to="/"
              style={{ textDecoration: 'none', fontSize: '1.65rem' }}
            >
              List Share
            </Link>
          </Navbar.LeftSide>
          <Navbar.RightSide>
            <Button colored onClick={navigateToListPage}>
              <FaPlus className="icon icon_color" /> New List
            </Button>
            <Button onClick={() => toggleModal('OPEN')}>
              <FaExternalLinkAlt className="icon" /> Open List
            </Button>
          </Navbar.RightSide>
        </Navbar>
      </>
    );
  else return null;
};
