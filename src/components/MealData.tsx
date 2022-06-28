import React from 'react';
import DataBox from './DataBox';

const MealData = ({ recipe }) => {
  const { prepTime, cookTime, servings } = recipe;

  return (
    <div className={styles.containerClass}>
      <DataBox title="Servings" content={servings} />
      <DataBox title="Prep Time" content={prepTime} />
      <DataBox title="Cook Time" content={cookTime} />
    </div>
  );
};

const styles = {
  containerClass:
    'flex w-full sm:w-2/3 px-2 sm:px-0 gap-2 justify-between text-base',
};

export default MealData;
