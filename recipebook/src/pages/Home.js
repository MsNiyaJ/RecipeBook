import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import PlusIcon from '../icons/PlusIcon';
import LinkButton from '../components/LinkButton';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);

  // When the component mounts, fetch the data from the API
  useEffect(() => {
    fetch('http://localhost:3000/recipes')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Error' + response.statusText);
      })
      .then((data) => {
        setRecipes([...data]);
      })
      .catch((error) => {
        // console.error('Error fetching data: ', error);
        setError(
          'There was a problem getting your recipes. Please try again later.'
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Filter the recipes by name based on the search value
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white h-screen pt-20 md:pt-32">
      <Navbar
        leftContent={
          <SearchBar
            setSearch={setSearch}
            inputClass="text-black placeholder-gray-500 rounded-lg p-2 w-20 sm:w-40"
            placeholder="Search for a recipe"
          />
        }
        centerContent="Recipe Collection"
        rightContent={
          <LinkButton
            link={'/add'}
            buttonStyle="border rounded-lg flex  text-xs md:text-lg items-center p-2 gap-2 hover:bg-white hover:text-black"
            buttonContent={
              <div className="flex items-center gap-2">
                Add
                <PlusIcon />
              </div>
            }
          />
        }
      />
      {loading && (
        <p className="flex justify-center items-center text-center text-gray-600 md:text-2xl py-52">
          Getting Your Recipes...
        </p>
      )}
      {error && (
        <p className="flex justify-center items-center text-center text-gray-600 md:text-2xl py-52">
          {error}
        </p>
      )}
      {filteredRecipes && !loading && !error && (
        <div className="border-x-2">
          {filteredRecipes.length > 0 ? (
            // Display all recipes
            filteredRecipes.map((recipe) => {
              return (
                <Recipe
                  key={recipe.id}
                  recipe={recipe}
                  setRecipes={setRecipes}
                />
              );
            })
          ) : (
            // If no recipes are found, display a message
            <div className="flex justify-center items-center text-center text-gray-600 md:text-2xl py-52">
              No recipes found. <br />
              Add a new recipe by clicking on the add button above!
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
