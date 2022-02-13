import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import Navbar from './Navbar';
import PlusIcon from './icons/PlusIcon';
import LinkButton from './LinkButton';

// import getAllRecipes from './requests';

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
      <Navbar
        centerContent={'Recipe Collection'}
        rightContent={
          <LinkButton
            link={'/add'}
            buttonStyle="border rounded-lg flex items-center p-2 gap-2 hover:bg-white hover:text-black"
            buttonContent={
              <div className="flex items-center gap-2">
                Add
                <PlusIcon />
              </div>
            }
          />
        }
      />
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
