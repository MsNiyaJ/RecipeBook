import React from 'react';

const NumberedItem = ({ number, item }) => {
  return (
    <div className="flex items-start mb-2">
      <p className="mr-2">{`${number}.`}</p>
      <p>{item}</p>
    </div>
  );
};

export default NumberedItem;
