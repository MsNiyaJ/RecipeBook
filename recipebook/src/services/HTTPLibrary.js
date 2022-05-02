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
