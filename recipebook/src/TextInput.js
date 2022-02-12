import React from 'react';
import './App.css';

// Name is for submission backend: string
// Label is what will be displayed on UI: string
// Required: boolean
// Max is the max number of chars: number
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