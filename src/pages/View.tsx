import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import RecipeData from '../components/RecipeData';
import { useLocation } from 'react-router-dom';
import BackButton from '../components/BackButton';

import { GetRecipeById } from '../services/HTTPLibrary';
import { RecipeType } from '../types/types';

const View = () => {
  // Get the slug from the URL. The slug represents the id of the recipe
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const [recipe, setRecipe] = useState<RecipeType | null>(null); // Set initial state for the recipe
  const [error, setError] = useState(null); // Set initial error state

  // When the component mounts, fetch the recipe from the API
  useEffect(() => {
    GetRecipeById(id).then((data) => {
      const { response: recipe, error: err } = data;
      if (err) setError(err);
      else setRecipe(recipe);
    });
  }, [id]);

  return (
    <div>
      <Navbar
        leftContent={<BackButton buttonText="Recipes" />}
        centerContent={'Recipe Collection'}
        rightContent={undefined}
      />
      {error && (
        <p className="flex justify-center items-center text-center text-gray-600 md:text-2xl py-52">
          {error}
        </p>
      )}
      {recipe && <RecipeData recipe={recipe} />}
    </div>
  );
};

export default View;
