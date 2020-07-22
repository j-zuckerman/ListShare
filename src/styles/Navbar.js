import styled from 'styled-components';

const Navbar = styled.nav`
  overflow: hidden;
  box-shadow: 0 0 7px black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  height: 4rem;
  border: 1px solid black;
  align-items: center;
`;

const LeftSide = styled.div`
  margin-right: auto;
  padding: 10px;
`;

const RightSide = styled.div`
  margin-left: auto;
  padding: 10px;
  display: flex;
`;

Navbar.LeftSide = LeftSide;
Navbar.RightSide = RightSide;

export default Navbar;
