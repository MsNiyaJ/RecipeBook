import React from 'react';
import { RecipeType } from '../types/types';
import RecipeTitle from './RecipeTitle';
import MealData from './MealData';
import RecipeImage from './RecipeImage';
import Dropdown from './Dropdown';

const styles = {
  containerClass: 'container mx-auto ',
  recipeDetails:
    'flex flex-col gap-5 justify-center items-center text-center mt-4',
};

const RecipeData = ({ recipe }: { recipe: RecipeType }) => {
  const { img, title, ingredients, instructions } = recipe;

  return (
    <div className={styles.containerClass}>
      <div className={styles.recipeDetails}>
        <RecipeImage src={img} alt={title} />
        <MealData recipe={recipe} />
      </div>
      <RecipeTitle title={title} />
      <Dropdown title="Ingredients" data={ingredients} type="checkbox" />
      <Dropdown title="Instructions" data={instructions} type="numbered" />
    </div>
  );
};

export default RecipeData;
