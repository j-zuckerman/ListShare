import styled from 'styled-components';
import Description from './Description';
import Checkbox from './Checkbox';

const ItemContainer = styled.div`
  display: flex;
`;

ItemContainer.Description = Description;
ItemContainer.CheckBox = Checkbox;

export default ItemContainer;
