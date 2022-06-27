import React, { useState } from 'react';
import DropdownHeader from './DropdownHeader';
import DropdownContent from './DropdownContent';
import { DropdownType } from '../types/types';

const Dropdown = ({ title, data, type = 'checkbox' }: DropdownType) => {
  const [isOpen, setIsOpen] = useState(false);
  const state = { isOpen, setIsOpen };
  return (
    <div className={styles.containerClass}>
      <DropdownHeader state={state} title={title} />
      {isOpen && <DropdownContent data={data} type={type} />}
    </div>
  );
};

const styles = {
  containerClass: 'mx-2 my-8 md:mx-48',
};

export default Dropdown;
