import React from 'react';
import ChevronLeft from './icons/ChevronLeft';
import Dots from './icons/Dots';

const Navbar = () => {
  return (
    <div className="bg-red-600 py-8 text-white border-b-4 border-dotted">
      <div className=" flex justify-between items-center px-2 md:px-20">
        <ChevronLeft />
        <h1 className="text-6xl font-licorice tracking-wide">
          Recipe Collection
        </h1>
        <Dots />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="border-x-2 h-screen"></div>
    </div>
  );
};

export default Home;
