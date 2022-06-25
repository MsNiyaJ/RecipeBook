import React from 'react';

const SearchBar = ({ setSearch, containerClass, inputClass, placeholder }) => {
  // Set the search value
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div data-testid="search-bar" className={containerClass}>
      <input
        className={inputClass}
        placeholder={placeholder}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default SearchBar;
