import React from 'react';

const Navbar = ({ leftContent, centerContent, rightContent }) => {
  return (
    <div className="bg-red-600 py-4 md:py-8 text-white w-full">
      <div className="flex justify-between items-center px-2 md:px-20">
        <div id="left">{leftContent}</div>
        <h1
          id="center"
          className="text-center text-4xl md:text-6xl font-licorice tracking-wide"
        >
          {centerContent}
        </h1>
        <div id="right">{rightContent}</div>
      </div>
    </div>
  );
};

export default Navbar;
