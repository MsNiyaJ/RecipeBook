import React from 'react';

const DataBox = ({
  heading,
  content,
  containerClass = 'flex flex-col justify-center bg-red-100 text-black w-20 h-20 border border-red-500',
  titleClass,
}) => {
  return (
    <div className={containerClass}>
      <h1 className={titleClass}>{heading}</h1>
      <p>{content}</p>
    </div>
  );
};

export default DataBox;
