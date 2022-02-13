import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ link, buttonContent, buttonStyle }) => {
  return (
    <Link to={link}>
      <button className={buttonStyle}>{buttonContent}</button>
    </Link>
  );
};

export default LinkButton;
