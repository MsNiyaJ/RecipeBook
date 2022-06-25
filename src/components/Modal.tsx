import React from 'react';
import '../global.css';

const Modal = ({ className="", title, titleColor = 'text-red-500', message }) => {
  return (
    <div className="modal-container">
      <div className={`modal ${className}`}>
        <h1
          className={`text-4xl md:text-6xl font-semibold font-licorice ${titleColor}`}
        >
          {title}
        </h1>
        <div className="py-5 md:py-10">{message}</div>
      </div>
    </div>
  );
};

export default Modal;
