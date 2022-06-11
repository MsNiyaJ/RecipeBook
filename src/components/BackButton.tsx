import React from 'react';
import LinkButton from './LinkButton';
import ChevronLeft from '../icons/ChevronLeft';

const BackButton = ({
  containerClassName,
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
