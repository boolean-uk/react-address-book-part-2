// src/components/SearchBar.jsx
import React from 'react';

function SearchBar({ searchTerm, onSearchTermChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts"
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;