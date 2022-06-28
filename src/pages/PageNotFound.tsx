import React from 'react';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';

const PageNotFound = () => {
  return (
    <div className="h-screen">
      <Navbar
        leftContent={<BackButton buttonText="Recipes" />}
        centerContent="Recipe Collection"
        rightContent={undefined}
      />
      <div className="relative flex justify-center items-center">
        <img
          src="/images/logos/transparent-logo2.png"
          alt="404"
          className="not-found"
        />
        <div className="absolute text-center font-bold text-5xl md:text-7xl">
          <p className="p-2">404</p>
          <p>Page Not Found</p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
