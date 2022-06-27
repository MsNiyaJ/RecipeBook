import React, { useState } from 'react';

const CheckboxItem = ({ item }) => {
  const [isChecked, setIsChecked] = useState(false);

  const styles = {
    containerClass: 'cursor-pointer flex items-start mb-2',
    inputClass:
      'w-4 h-4 mt-1 mr-2 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-white  focus:ring-2 dark:bg-gray-700 dark:border-gray-600',
    itemClass: `${isChecked ? 'line-through' : ''}`,
  };

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.containerClass}>
      <input
        type="checkbox"
        className={styles.inputClass}
        checked={isChecked}
        onChange={onChange}
      />
      <span className={styles.itemClass} onClick={onChange}>
        {item}
      </span>
    </div>
  );
};

export default CheckboxItem;
