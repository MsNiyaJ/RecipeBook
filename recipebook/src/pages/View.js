import React, { useState, useEffect } from 'react';
import LinkButton from '../components/LinkButton';
import Navbar from '../components/Navbar';
import ChevronLeft from '../icons/ChevronLeft';
import RecipeData from '../components/RecipeData';
import { useLocation } from 'react-router-dom';

const View = () => {
  // Get the slug from the URL. The slug represents the id of the recipe
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const [recipe, setRecipe] = useState(null); // Set initial state for the recipe
  const [error, setError] = useState(null); // Set initial error state

  // When the component mounts, fetch the recipe from the API
  useEffect(() => {
    fetch(`http://localhost:3000/recipes/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        if (response.status === 404) {
          throw new Error('Recipe not found');
        }
        throw new Error('Error fetching recipe data');
      })
      .then((data) => {
        setRecipe(data);
      })
      .catch((error) => {
        if (error.message === 'Failed to fetch') {
          setError('Error fetching recipe data');
        } else {
          setError(error.message);
        }
        // console.error('Error fetching recipe data: ', error.message);
      });
  }, [id]);

  // console.log('recipe', recipe);

  // Setting up the back button for the navbar
  const backButton = (
    <LinkButton
      link={'/'}
      buttonStyle="flex gap-2"
      buttonContent={
        <div className="flex items-center gap-2">
          <ChevronLeft /> <span className="hidden md:block">Recipes</span>
        </div>
      }
    />
  );

  return (
    <div>
      <Navbar leftContent={backButton} centerContent={'Recipe Collection'} />
      {error && (
        <p className="flex justify-center items-center text-center text-gray-600 md:text-2xl py-52">
          {error}
        </p>
      )}
      <div className="text-center text-gray-600 md:text-2xl">
        {recipe && <RecipeData recipe={recipe} />}
      </div>
    </div>
  );
};

export default View;
