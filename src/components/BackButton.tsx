import React from 'react';
import LinkButton from './LinkButton';
import ChevronLeft from '../icons/ChevronLeft';

/**
 * @description Back button component takes you back to the home page
 * @param containerClass - The class name of the container
 * @param buttonClassName - The class name of the button
 * @param buttonText - The text of the button
 */
const BackButton = ({
  containerClassName = '',
  buttonClassName = 'flex items-center gap-2',
  buttonText,
}) => {
  return (
    <div className={containerClassName}>
      <LinkButton
        link={'/'}
        buttonStyle="flex gap-2"
        buttonContent={
          <div className={buttonClassName}>
            <ChevronLeft />
            <span className="hidden md:block">{buttonText}</span>
          </div>
        }
      />
    </div>
  );
};

export default BackButton;
