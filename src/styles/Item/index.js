import styled from 'styled-components';
import Description from './Description';
import Checkbox from './Checkbox';

const ItemContainer = styled.div`
  display: flex;
  border-bottom: 1px solid grey;
  width: 500px;
  align-items: center;
  padding: 10px;
`;

ItemContainer.Description = Description;
ItemContainer.CheckBox = Checkbox;

export default ItemContainer;
