import React from 'react';
import './App.css';

/**
 * @description This is the text input component
 * @param {string} name The name of the input
 * @param {string} label The label of the input
 * @param {boolean} required Whether the input is required or not
 * @param {number} max The max number of characters allowed
 * @param {string} subText Additional text to display next to the the label
 */
const TextInput = ({ name, label, required, max, subText = '' }) => {
  return (
    <label htmlFor={name}>
      <p>
        {label}
        <span className="text-red-600">{required && '*'}</span>
        <span className="text-gray-400 italic">{subText}</span>
      </p>
      <input
        type={name}
        name={name}
        id={name}
        className="textField"
        required={required}
        maxLength={max}
      />
    </label>
  );
};

export default TextInput;
