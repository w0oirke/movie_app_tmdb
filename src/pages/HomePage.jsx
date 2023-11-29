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
      <footer className="footer">
        <p>© 2023. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
