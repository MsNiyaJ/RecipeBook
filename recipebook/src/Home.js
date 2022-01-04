import React from 'react';
import Dots from './icons/DotsIcon';
import recipeData from './data/recipes';
import Recipe from './Recipe';

const Navbar = () => {
  return (
    <div className="bg-red-600 py-8 text-white border-b-4 border-dotted">
      <div className=" flex justify-between items-center px-2 md:px-20">
        <div></div>
        <h1 className="text-4xl md:text-6xl font-licorice tracking-wide">
          Recipe Collection
        </h1>
        <Dots />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="container mx-auto bg-white">
      <Navbar />
      <div className="border-x-2 h-screen overflow-y-auto">
        {recipeData.map((recipe) => {
          return <Recipe key={recipe.title} recipe={recipe} />;
        })}
      </div>
    </div>
  );
};

export default Home;
