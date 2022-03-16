import React from 'react';
import DataBox from './DataBox';

const SidebarData = ({ recipe }) => {
  const { prepTime, cookTime, servings } = recipe;

  return (
    <div className="flex flex-col gap-4 text-base">
      <DataBox
        heading={'Servings'}
        content={servings}
        titleClass="text-xs"
      />
      <DataBox
        heading={'Prep Time'}
        content={prepTime}
        titleClass="text-xs"
      />
      <DataBox
        heading={'Cook Time'}
        content={cookTime}
        titleClass="text-xs"
      />
    </div>
  );
};

export default SidebarData;
