import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import PlusIcon from '../icons/PlusIcon';
import LinkButton from '../components/LinkButton';

import { RecipeType } from '../types/types';
import { GetRecipes } from '../services/HTTPLibrary';
import Recipes from '../components/Recipes';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState<RecipeType[]>([]);

  // When the component mounts, fetch the data from the API
  useEffect(() => {
    GetRecipes().then((data) => {
      // If there is no error, set the recipes to the data,
      // otherwise set the error message
      if (!data.error && data.response) {
        setRecipes(data.response);
      } else {
        setError(data.error);
      }

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
            containerClass={undefined}
          />
        }
        centerContent="Recipe Collection"
        rightContent={
          <LinkButton
            link={'/add'}
            buttonStyle="border rounded-lg flex  text-xs md:text-lg items-center p-2 gap-2 hover:bg-white hover:text-black"
            buttonContent={
              <div
                data-testid="add-new-recipe-button"
                className="flex items-center gap-2"
              >
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
        <Recipes recipes={filteredRecipes} setRecipes={setRecipes} />
      )}
    </div>
  );
};

export default Home;
