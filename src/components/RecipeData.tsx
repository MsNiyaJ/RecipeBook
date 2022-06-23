import React from 'react';
import SidebarData from './SidebarData';

const RecipeData = ({ recipe }) => {
  const { img, title, ingredients, instructions } = recipe;
  return (
    <div className="text-lg pt-20 md:pt-32">
      <div className="flex gap-5 justify-center items-start text-center mt-4">
        <SidebarData recipe={recipe} />
        <div className="w-72 h-72">
          <img
            className="h-full w-full object-cover border border-red-500"
            src={img}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.src = '/images/recipes/defaultrecipe.jpeg';
            }}
            alt={title}
          />
        </div>
      </div>
      <h1 className="mt-4 font-bold text-4xl text-black bg-red-100 py-2">
        {title}
      </h1>
      <div className="flex flex-col justify-center items-center gap-4 md:mx-6 my-8">
        <div className="w-1/2">
          <span className="font-bold">Ingredients</span>
          <p>{ingredients}</p>
        </div>
        <div className="w-1/2">
          <span className="font-bold">Instructions</span>
          <p>{instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeData;
