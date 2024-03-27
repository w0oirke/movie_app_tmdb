// HomePage.jsx
// import package
import React, { useMemo } from 'react';
import { Container } from 'react-bootstrap';

// import file
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

const HomePage = ({ movies, onSearch, onSelect }) => {
  const MemoizedMovieList = useMemo(() => {
    return React.memo(MovieList);
  }, []);

  return (
    <Container>
      <div className="home-page">
        <SearchBar onSearch={onSearch} />
        <MemoizedMovieList movies={movies} onSelect={onSelect} />
      </div>
    </Container>
  );
};

export default HomePage;
