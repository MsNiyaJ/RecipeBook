import React from 'react';
import LinkButton from '../components/LinkButton';
import ChevronLeft from '../icons/ChevronLeft';

const BackButton = () => {
  return (
    <LinkButton
      link={'/'}
      buttonStyle="flex gap-2"
      buttonContent={
        <div className="flex items-center gap-2">
          <ChevronLeft /> <span className="hidden md:block">Recipes</span>
        </div>
      }
    />
  );
};

export default BackButton;
