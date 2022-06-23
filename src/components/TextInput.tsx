import React, { ChangeEventHandler } from 'react';
import '../global.css';

/**
 * @description This is the text input component
 * @param {string} name The name of the input
 * @param {string} label The label of the input
 * @param {boolean} required Whether the input is required or not
 * @param {number} max The max number of characters allowed
 * @param {string} subText Additional text to display next to the the label
 * @param {string} value The value of the input
 * @param {ChangeEventHandler<HTMLInputElement>} onChange The function to call when the input changes
 */
export type TextInputType = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  asterisk?: boolean;
  max?: number;
  subText?: string;
  value?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const TextInput = ({
  name,
  label,
  type = 'text',
  required = false,
  asterisk = true,
  max,
  subText = '',
  value = '',
  onChange,
}: TextInputType) => {
  return (
    <label htmlFor={name}>
      <p>
        {label}
        <span className="text-red-600">{required && asterisk && '*'}</span>
        <span className="text-gray-400 italic">{subText}</span>
      </p>
      <input
        type={type}
        name={name}
        id={name}
        className="textField"
        required={required}
        maxLength={max}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default TextInput;
