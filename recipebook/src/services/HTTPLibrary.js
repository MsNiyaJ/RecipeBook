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
