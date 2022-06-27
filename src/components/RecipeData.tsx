import React from 'react';
import { RecipeType } from '../types/types';
import RecipeTitle from './RecipeTitle';
import MealData from './MealData';
import RecipeImage from './RecipeImage';

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
    </div>
    // <div className="text-lg pt-20 md:pt-32">
    //   <div className="flex gap-5 justify-center items-start text-center mt-4">
    //     <MealData recipe={recipe} />
    //     <div className="w-72 h-72">
    //       <img
    //         className="h-full w-full object-cover border border-red-500"
    //         src={img}
    //         onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    //           e.currentTarget.src = '/images/recipes/defaultrecipe.jpeg';
    //         }}
    //         alt={title}
    //       />
    //     </div>
    //   </div>
    //   <h1 className="mt-4 font-bold text-4xl text-black bg-red-100 py-2">
    //     {title}
    //   </h1>
    //   <div className="flex flex-col justify-center items-center gap-4 md:mx-6 my-8">
    //     <div className="w-1/2">
    //       <span className="font-bold">Ingredients</span>
    //       <p>{ingredients}</p>
    //     </div>
    //     <div className="w-1/2">
    //       <span className="font-bold">Instructions</span>
    //       <p>{instructions}</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default RecipeData;
