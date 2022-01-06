import React from 'react';
import './App.css';
import ChevronLeft from './icons/ChevronLeft';
import { Link } from 'react-router-dom';
import TextInput from './TextInput';

const Navbar = () => {
  return (
    <div className="bg-red-600 py-4 md:py-8 text-white border-b-4 border-dotted sticky top-0">
      <div className=" flex justify-between items-center px-10 md:px-20">
        <Link to="/">
          <div className="flex gap-2">
            <ChevronLeft /> Recipes
          </div>
        </Link>
        <h1 className="text-4xl md:text-6xl font-licorice tracking-wide">
          Add a Recipe
        </h1>
        <button className="border rounded-lg flex items-center p-2 gap-2 hover:bg-white hover:text-black">
          Save
        </button>
      </div>
    </div>
  );
};

const Add = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container mx-auto p-10">
        <form action="">
          <TextInput name={'title'} label={'Title'} required={true} />
          <TextInput name={'link'} label={'URL'} />
          <button type="submit" className="border-2 p-2 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
