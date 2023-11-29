import React from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import '../styles/HomePage.sass';

const HomePage = ({ movies, onSearch, onSelect }) => (
  <div>
    <SearchBar onSearch={onSearch} />
    <MovieList movies={movies} onSelect={onSelect} />
    <footer>
        <p>© 2023. All Rights Reserved.</p>
    </footer>
  </div>
);

export default HomePage;
