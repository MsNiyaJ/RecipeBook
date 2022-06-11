import React from 'react';
import DataBox from './DataBox';

const SidebarData = ({ recipe }) => {
  const { prepTime, cookTime, servings } = recipe;

  return (
    <div className="flex flex-col gap-6 text-base">
      <DataBox heading="Servings" content={servings} />
      <DataBox heading="Prep Time" content={prepTime} />
      <DataBox heading="Cook Time" content={cookTime} />
    </div>
  );
};

export default SidebarData;
