import React from 'react';

const TextArea = ({
  name,
  label,
  required,
  max,
  subText = '',
  value = '',
  onChange = () => {},
}) => {
  return (
    <label htmlFor={name}>
      <p>
        {label}
        <span className="text-red-600">{required && '*'}</span>
        <span className="text-gray-400 italic">{subText}</span>
      </p>
      <textarea
        name={name}
        id={name}
        className="textField min-h-32"
        required={required}
        maxLength={max}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default TextArea;
