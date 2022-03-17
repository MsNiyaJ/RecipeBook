import React from 'react';
import '../global.css';
import BackButton from './BackButton';

const Modal = ({ className, title, titleColor = 'text-red-500', message }) => {
  return (
    <div className="modal-container">
      <div className={`modal ${className}`}>
        <h1
          className={`text-4xl md:text-6xl font-semibold font-licorice ${titleColor}`}
        >
          {title}
        </h1>
        <p className="py-5 md:py-10">{message}</p>
        <BackButton
          containerClassName="flex justify-center"
          buttonClassName="flex items-center gap-2 bg-red-500 p-2 rounded-md text-white"
          buttonText="Back to Recipes"
        />
      </div>
    </div>
  );
};

export default Modal;
