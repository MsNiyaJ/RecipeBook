import React from 'react';
import ChevronRight from '../icons/ChevronRight';
import ChevronDown from '../icons/ChevronDown';

const DropdownHeader = ({ title, state }) => {
  const { isOpen, setIsOpen } = state;
  return (
    <header
      className={styles.containerClass}
      data-testid={`dropdown-header-${title}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.chevronClass}>
        {isOpen ? <ChevronDown color="red" /> : <ChevronRight color="red" />}
      </div>
      <p>{title}</p>
    </header>
  );
};

const styles = {
  containerClass: 'flex items-center pt-6 pb-2',
  chevronClass: 'cursor-pointer',
};

export default DropdownHeader;
