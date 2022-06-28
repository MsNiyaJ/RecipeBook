import React from 'react';

/**
 * @description DataBox is a component that displays recipe data like prep time, cook time, and servings.
 * @param title - The title of the data box.
 * @param content - The content of the data box.
 * @param containerClass - The classname of the container of the data box.
 * @param titleClass - The classname of the heading of the data box.
 */
const DataBox = ({
  title,
  content,
  containerClass = 'flex flex-col justify-center text-black w-1/3 h-20 border border-red-500',
  titleClass = 'text-xs',
}) => {
  return (
    <div className={containerClass}>
      <h1 className={titleClass}>{title}</h1>
      <p className={styles.contentClass}>{content}</p>
    </div>
  );
};

const styles = {
  contentClass: 'font-semibold',
};

export default DataBox;
