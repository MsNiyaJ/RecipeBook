import React, { useState } from 'react';
import DropdownHeader from './DropdownHeader';
import DropdownContent from './DropdownContent';
import { DropdownType } from '../types/types';

const Dropdown = ({ title, data, type = 'checkbox' }: DropdownType) => {
  const [isOpen, setIsOpen] = useState(true);
  const state = { isOpen, setIsOpen };
  return (
    <div className={styles.containerClass}>
      <DropdownHeader state={state} title={title} />
      {isOpen && <DropdownContent data={data} type={type} />}
    </div>
  );
};

const styles = {
  containerClass: 'mx-2 sm:ml-24 sm:mr-10 md:mx-28 lg:mx-48 max-w-2xl',
};

export default Dropdown;
