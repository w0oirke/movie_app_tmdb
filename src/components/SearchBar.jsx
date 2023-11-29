import React, { useState } from 'react';
import '../styles/SearchBar.sass';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch(''); // Optionally, you may want to trigger a search with an empty query
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="검색"
        aria-label="검색"
      />
      <button type="submit">영화 찾기</button>
      <button type="button" onClick={handleClear} disabled={!query}>
        지우기
      </button>
    </form>
  );
};

export default SearchBar;
