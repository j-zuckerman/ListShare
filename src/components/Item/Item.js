import React, { useState } from 'react';
import ItemContainer from '../../styles/Item';
import Description from '../../styles/Item/Description';
import Checkbox from '../../styles/Item/Checkbox';

export const Item = ({ data }) => {
  const [description, setDescription] = useState(data.description);
  const [isCompleted, setCompleted] = useState(data.isCompleted);

  const handleCheckboxChange = (event) => {
    setCompleted(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <ItemContainer>
      <Checkbox checked={isCompleted} onChange={handleCheckboxChange} />
      <Description value={description} onChange={handleDescriptionChange} />
    </ItemContainer>
  );
};
