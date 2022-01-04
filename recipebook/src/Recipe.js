import React from 'react';
import { OpenEye } from './icons/EyeIcon';
import PencilIcon from './icons/PencilIcon';
import TrashIcon from './icons/TrashIcon';

const Recipe = ({ recipe }) => {
  return (
    <div className="p-4 border-b-2 flex flex-col md:flex-row text-center md:text-justify items-center gap-4">
      <img src={recipe.img} alt="" className="h-40 w-40" />
      <div className="w-full md:w-5/6">
        <h1 className=" font-mono font-semibold">{recipe.title}</h1>
        <p>{recipe.description}</p>
      </div>
      <div className="w-1/3 place-content-center flex gap-2">
        <OpenEye />
        <PencilIcon />
        <TrashIcon />
      </div>
    </div>
  );
};

export default Recipe;
