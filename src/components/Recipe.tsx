import React from 'react';
import { OpenEye } from '../icons/EyeIcon';
import PencilIcon from '../icons/PencilIcon';
import TrashIcon from '../icons/TrashIcon';
import Modal from './Modal';

import ReactTooltip from 'react-tooltip';
import { DeleteRecipe } from '../services/HTTPLibrary';

const Recipe = ({ recipe, setRecipes }) => {
  const { id, title, description, img } = recipe;
  const [isOpen, setIsOpen] = React.useState(false);
  const [error, setError] = React.useState('');

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
    // navigate to the edit page
    window.location.href = `/edit/${id}`;
  };

  /**
   * @description Removes the recipe from the list of recipes
   * @param {Event} event
   * @param {string} id
   */
  const handleDelete = (event) => {
    event.preventDefault();

    // Delete the recipe from the database
    DeleteRecipe(id).then((response) => {
      if (response.error) {
        setError(response.error);
      } else {
        // Close the modal
        setIsOpen(false);

        // Delete from the UI
        setRecipes((prevRecipes) =>
          prevRecipes.filter((recipe) => recipe.id !== id)
        );
      }
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

    // If the user cancels the deletion, close the modal
    if (userResponse === 'No') {
      setIsOpen(false);
    }
  };

  const modalTitle = error
    ? error
    : 'Are you sure you want to delete this recipe?';

  const modalErrorMessage = (
    <div className="modal-error">
      <p className="pb-6">
        Can not delete a recipe at this time. Please try again later.
      </p>
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
      >
        Close
      </button>
    </div>
  );

  return (
    <div
      id={id}
      className="p-4 border-b-2 flex flex-col md:flex-row text-center md:text-justify items-center gap-4"
    >
      {isOpen && (
        <Modal
          title={modalTitle}
          message={
            error ? (
              modalErrorMessage
            ) : (
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
            )
          }
        />
      )}
      {/* Image */}
      <div className="h-52 w-72">
        <img
          data-testid="recipe-image"
          src={img}
          // if the image fails to load, replace it with the default image
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.src = '/images/recipes/defaultrecipe.jpeg';
          }}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Title & Description */}
      <div className="w-full md:w-5/6">
        <h1 className="font-mono font-semibold">{title}</h1>
        <p data-testid="recipe-description">{description}</p>
      </div>
      {/* Actions */}
      <div className="w-1/3 place-content-center flex gap-2">
        <ReactTooltip place="top" type="dark" effect="solid" />
        <div data-tip="View">
          <OpenEye onClick={(e) => handleView(e)} />
        </div>

        <ReactTooltip place="top" type="dark" effect="solid" />
        <div data-tip="Edit">
          <PencilIcon onClick={(e) => handleEdit(e)} />
        </div>

        <ReactTooltip place="top" type="dark" effect="solid" />
        <div data-tip="Delete">
          <TrashIcon onClick={() => setIsOpen(true)} />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
