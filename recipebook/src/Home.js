import React, { useEffect, useState } from 'react';
import PlusIcon from './icons/PlusIcon';
import Recipe from './Recipe';
import { Link } from 'react-router-dom';
// import getAllRecipes from './requests';

const Navbar = () => {
  return (
    <div className="bg-red-600 py-4 md:py-8 text-white border-b-4 border-dotted sticky top-0">
      <div className=" flex justify-between items-center px-2 md:px-20">
        <div className="w-20"></div>
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
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  let recipeData = [];
  if (data) {
    recipeData = [...data];
  }

  return (
    <div className="bg-white h-screen">
      <Navbar />
      <div className="border-x-2">
        {recipeData.length > 0 ? (
          recipeData.map((recipe) => {
            return <Recipe key={recipe.id} recipe={recipe} />;
          })
        ) : (
          // If no recipes are found, display a message
          <div className="flex justify-center items-center text-center text-gray-600 md:text-2xl py-52">
            No recipes found. <br />
            Add a new recipe by clicking on the add button above!
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
