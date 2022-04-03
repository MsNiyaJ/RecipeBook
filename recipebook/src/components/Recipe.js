import React from 'react';
import { OpenEye } from '../icons/EyeIcon';
import PencilIcon from '../icons/PencilIcon';
import TrashIcon from '../icons/TrashIcon';
import Modal from './Modal';

const Recipe = ({ recipe, setRecipes }) => {
  const { id, title, description, img } = recipe;
  const [isOpen, setIsOpen] = React.useState(false);

  /**
   * When the user clicks on the eye icon, we want to navigate to the recipe
   * @param {Event} event
   * @param {string} id
   */
  const handleView = (event) => {
    event.preventDefault();
    // navigate to the view page
    window.location.href = `/view/${id}`;
  };

  /**
   * When the user clicks on the pencil icon, we want to navigate to the edit page
   * @param {Event} event
   * @param {string} id
   */
  const handleEdit = (event) => {
    event.preventDefault();
    console.log('Edit recipe:', id);
  };

  /**
   * @description Removes the recipe from the list of recipes
   * @param {Event} event
   * @param {string} id
   */
  const handleDelete = (event) => {
    event.preventDefault();

    // Delete from the UI
    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.id !== id)
    );

    // delete the recipe from the database
    fetch(`http://localhost:3000/recipes/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Error deleting recipe');
      })
      .then((data) => {
        console.log('Recipe deleted:', id);
      })
      .catch((error) => {
        return 'Error deleting recipe';
      });
  };

  /**
   * @description Determines if the recipe should be deleted or not
   * @param {Event} event
   */
  const handleModal = (event) => {
    event.preventDefault();
    const userResponse = event.target.textContent;

    // If the user confirms the deletion, delete the recipe
    if (userResponse === 'Yes') {
      handleDelete(event);
    }

    // Close the modal after the user confirms or cancels
    if (userResponse === 'No' || userResponse === 'Yes') {
      setIsOpen(false);
    }
  };

  return (
    <div className="p-4 border-b-2 flex flex-col md:flex-row text-center md:text-justify items-center gap-4">
      {isOpen && (
        <Modal
          title="Are you sure you want to delete this recipe?"
          message={
            <div className="flex gap-2 justify-center">
              <button
                type="button"
                onClick={handleModal}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
              >
                Yes
              </button>
              <button
                type="button"
                onClick={handleModal}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
              >
                No
              </button>
            </div>
          }
        />
      )}
      {/* Image */}
      <div className="h-52 w-72">
        <img
          src={img}
          // if the image fails to load, replace it with the default image
          onError={(e) => {
            e.target.src = '/defaultrecipe.jpeg';
          }}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Title & Description */}
      <div className="w-full md:w-5/6">
        <h1 className="font-mono font-semibold">{title}</h1>
        <p>{description}</p>
      </div>
      {/* Actions */}
      <div className="w-1/3 place-content-center flex gap-2">
        <OpenEye onClick={(e) => handleView(e)} />
        <PencilIcon onClick={(e) => handleEdit(e)} />
        <TrashIcon onClick={() => setIsOpen(true)} />
      </div>
    </div>
  );
};

export default Recipe;
