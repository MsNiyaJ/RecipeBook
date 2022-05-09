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
export const GetRecipeById = async (id) => {
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
export const AddRecipe = async (recipe) => {
  let error;

  const response = await fetch('http://localhost:3000/recipes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(recipe),
  })
    .then((response) => {
      console.log('response', response);
      if (response.ok) {
        return response.json();
      }

      throw new Error();
    })
    .catch(() => {
      error = 'There was a problem adding your recipe. Please try again later.';
      console.log(error);
    });

  return { response, error };
};

/**
 * @description PUT request to edit a recipe '/recipes/:id'
 * @param {string} id - The id of the recipe to be updated
 * @param {object} recipe - An object containing the new recipe details
 * @returns {object} { response, error }
 **/
export const EditRecipe = async (id, recipe) => {
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
export const DeleteRecipe = async (id) => {
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
    .then(() => {
      console.log('Recipe deleted:', id);
    })
    .catch(() => {
      error = 'Error deleting recipe';
    });

  return { response, error };
};
