import React from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import '../styles/HomePage.sass';

const HomePage = ({ movies, onSearch, onSelect }) => (
  <div>
    <SearchBar onSearch={onSearch} />
    <MovieList movies={movies} onSelect={onSelect} />
  </div>
);

export default HomePage;