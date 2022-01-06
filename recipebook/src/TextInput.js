import React from 'react';
import './App.css';

// Name is for submission backend: string
// Label is what will be displayed on UI: string
// Required: boolean
const TextInput = ({ name, label, required }) => {
  return (
    <label htmlFor={name}>
      <p>
        {label}
        <span className="text-red-600">{required && '*'}</span>
      </p>
      <input
        type={name}
        name={name}
        id={name}
        className="textField"
        required={required}
      />
    </label>
  );
};

export default TextInput;
