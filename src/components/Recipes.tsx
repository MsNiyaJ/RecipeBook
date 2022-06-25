import React, { Dispatch, SetStateAction } from 'react';
import { RecipeType } from '../types/types';
import Recipe from './Recipe';

const Recipes = ({
  recipes,
  setRecipes,
}: {
  recipes: RecipeType[];
  setRecipes: Dispatch<SetStateAction<RecipeType[]>>;
}) => {
  return (
    <div data-testid="recipes-list" className="border-x-2">
      {recipes.length > 0 ? (
        // Display all recipes
        recipes.map((recipe: RecipeType) => {
          return (
            <Recipe key={recipe.id} recipe={recipe} setRecipes={setRecipes} />
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
  );
};

export default Recipes;
