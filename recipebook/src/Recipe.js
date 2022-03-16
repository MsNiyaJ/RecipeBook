import React from 'react';
import { OpenEye } from './icons/EyeIcon';
import PencilIcon from './icons/PencilIcon';
import TrashIcon from './icons/TrashIcon';

/**
 * When the user clicks on the eye icon, we want to navigate to the recipe
 * @param {Event} event
 * @param {string} id
 */
const handleView = (event, id) => {
  event.preventDefault();
  // console.log('View recipe:', id);

  // navigate to the view page
  window.location.href = `/view/${id}`;
};

/**
 * When the user clicks on the pencil icon, we want to navigate to the edit page
 * @param {Event} event
 * @param {string} id
 */
const handleEdit = (event, id) => {
  event.preventDefault();
  console.log('Edit recipe:', id);
};

/**
 * When the user clicks on the trash icon, we want to delete the recipe
 * @param {Event} event
 * @param {string} id
 */
const handleDelete = (event, id) => {
  event.preventDefault();
  console.log('Delete recipe:', id);
};

const Recipe = ({ recipe }) => {
  const { id, title, description, img } = recipe;

  return (
    <div className="p-4 border-b-2 flex flex-col md:flex-row text-center md:text-justify items-center gap-4">
      {/* Image */}
      <div className="h-52 w-72">
        <img
          src={img}
          onError={(e) => {
            // if the image fails to load, replace it with the default image
            e.target.src = '/defaultrecipe.jpeg';
          }}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Title & Description */}
      <div className="w-full md:w-5/6">
        <h1 className=" font-mono font-semibold">{title}</h1>
        <p>{description}</p>
      </div>
      {/* Actions */}
      <div className="w-1/3 place-content-center flex gap-2">
        <OpenEye onClick={(e) => handleView(e, id)} />
        <PencilIcon onClick={(e) => handleEdit(e, id)} />
        <TrashIcon onClick={(e) => handleDelete(e, id)} />
      </div>
    </div>
  );
};

export default Recipe;
