import { RecipeType } from '../types/types';

/**
 * @description GET request to get all recipes '/recipes'
 * @returns {object} - { response, error }
 */
export const GetRecipes = async () => {
  let error;

  const response = await fetch('http://localhost:3000/recipes')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      return [...data];
    })
    .catch(() => {
      error =
        'There was a problem getting your recipes. Please try again later.';
    });

  return { response, error };
};

/**
 * @description GET request to get a recipe by id '/recipes/:id'
 * @param {string} id - The id of the recipe to get
 * @returns {object} { response, error }
 */
export const GetRecipeById = async (id: string) => {
  let error;

  const response = await fetch(`http://localhost:3000/recipes/${id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error();
    })
    .catch(() => {
      error =
        'There was a problem getting your recipe. Please try again later.';
    });

  return { response, error };
};

/**
 * @description POST request to create a new recipe '/recipes'
 * @param {object} recipe - An object containing the recipe to be added
 * @returns {object} { response, error }
 */
export const AddRecipe = async (recipe: RecipeType) => {
  let error;

  const response = await fetch('http://localhost:3000/recipes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(recipe),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error();
    })
    .catch(() => {
      error = 'There was a problem adding your recipe. Please try again later.';
    });

  return { response, error };
};

/**
 * @description PUT request to edit a recipe '/recipes/:id'
 * @param {string} id - The id of the recipe to be updated
 * @param {object} recipe - An object containing the new recipe details
 * @returns {object} { response, error }
 **/
export const EditRecipe = async (id: string, recipe: RecipeType) => {
  let error;

  const response = await fetch(`http://localhost:3000/recipes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(recipe),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error();
    })
    .catch(() => {
      error =
        'There was a problem editing your recipe. Please try again later.';
    });

  return { response, error };
};

/**
 * @description DELETE request to delete a recipe '/recipes/:id'
 * @param {string} id - The id of the recipe to be deleted
 * @returns {object} { response, error }
 */
export const DeleteRecipe = async (id: string) => {
  let error;

  const response = await fetch(`http://localhost:3000/recipes/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error deleting recipe');
    })
    .catch(() => {
      error = 'Error deleting recipe';
    });

  return { response, error };
};

/**
 * @description GET request to get users '/users'
 * @returns {object} { response, error }
 */
export const GetUsers = async () => {
  let error: string;

  const response = await fetch('http://localhost:3000/users')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      return [...data];
    })
    .catch(() => {
      error = 'There was a problem logging in. Please try again later.';
    });

  return { response, error };
};
