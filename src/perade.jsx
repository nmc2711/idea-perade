import React, { useState } from 'react';

function SearchUI() {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', query);
  };

  return (
    <div className='search-container'>
      <input
        type='text'
        value={query}
        onChange={handleInputChange}
        className='search-input'
        placeholder='Search...'
      />
      <button onClick={handleSearch} className='search-button'>
        Search
      </button>
    </div>
  );
}

export default SearchUI;
