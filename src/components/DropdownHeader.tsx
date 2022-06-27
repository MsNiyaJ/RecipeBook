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
  chevronClass: 'cursor-pointer',
  containerClass: 'flex items-center',
};

export default DropdownHeader;
