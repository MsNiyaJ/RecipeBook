import React from 'react';
import PlusIcon from './icons/PlusIcon';
// import recipeData from './data/recipes';
import Recipe from './Recipe';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-red-600 py-4 md:py-8 text-white border-b-4 border-dotted sticky top-0">
      <div className=" flex justify-between items-center px-2 md:px-20">
        <div></div>
        <h1 className="text-4xl md:text-6xl font-licorice tracking-wide">
          Recipe Collection
        </h1>
        <Link to="/add">
          <button className="border rounded-lg flex items-center p-2 gap-2 hover:bg-white hover:text-black">
            Add <PlusIcon />
          </button>
        </Link>
      </div>
    </div>
  );
};

const Home = () => {
  // Retrieve a list of receipes from localStorage
  let recipeData = JSON.parse(localStorage.getItem('recipes'));

  // Create a new list if no recipes exist.
  if (!recipeData) {
    recipeData = [];
    localStorage.setItem('recipes', JSON.stringify(recipeData));
  }

  return (
    <div className="bg-white h-screen">
      <Navbar />
      <div className="border-x-2">
        {recipeData.length > 0 ? (
          recipeData.map((recipe) => {
            return <Recipe key={recipe.title} recipe={recipe} />;
          })
        ) : (
          <div className="flex justify-center items-center text-center text-gray-600 md:text-2xl py-52">
            No recipes found. <br />
            Add a new recipe by clicking on the three dots above!
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
