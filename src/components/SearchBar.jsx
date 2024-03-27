// import packages
// SerachBar.jsx
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'; 

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch(''); 
  };

  return (
    <Form onSubmit={handleSubmit} className="search-bar">
      <Form.Control
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="검색"
        aria-label="검색"
      />
      <Button variant="primary" type="submit">영화 찾기</Button>
      <Button variant="secondary" type="button" onClick={handleClear} disabled={!query}>
        지우기
      </Button>
    </Form>
  );
};

export default SearchBar;
