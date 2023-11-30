import React, { useMemo } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import '../styles/HomePage.sass';

const HomePage = ({ movies, onSearch, onSelect }) => {

  const MemoizedMovieList = useMemo(() => {
    return React.memo(MovieList);
  }, []);

  return (
    <div className="home-page">
      <SearchBar onSearch={onSearch} />
      <MemoizedMovieList movies={movies} onSelect={onSelect} />
    </div>
  );
};

export default HomePage;
