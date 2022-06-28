import React from 'react';

const RecipeTitle = ({ title }) => {
  return (
    <div className={styles.containerClass}>
      <div className={styles.barClass} />
      <h1 className={styles.titleClass}>{title}</h1>
      <div className={styles.barClass} />
    </div>
  );
};

export default RecipeTitle;

const styles = {
  containerClass: 'flex justify-center items-center text-center py-5',
  titleClass: 'text-xl md:text-3xl',
  barClass: 'bg-black w-1/3 h-px mx-2 max-w-xs',
};
