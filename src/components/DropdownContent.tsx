import React from 'react';
import { DropdownType } from '../types/types';
import CheckboxItem from './CheckboxItem';
import NumberedItem from './NumberedItem';

const DropdownContent = ({ data, type = 'text' }: DropdownType) => {
  return (
    <div className="mx-10">
      {type === 'checkbox' &&
        data.map((item, index) => <CheckboxItem key={index} item={item} />)}

      {type === 'numbered' &&
        data.map((item, index) => (
          <NumberedItem key={index} number={index + 1} item={item} />
        ))}
    </div>
  );
};

export default DropdownContent;
