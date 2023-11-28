import React, { useState } from 'react';  // 'useEffect' 삭제
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import './styles/App.scss';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = async (query) => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: process.env.REACT_APP_TMDB_API_KEY,
          query: query
        }
      });
      setMovies(response.data.results);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    }
  };

  const selectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage movies={movies} onSearch={searchMovies} onSelect={selectMovie} />} />
        <Route path="/detail/:id" element={<DetailPage movie={selectedMovie} />} />  
      </Routes>
    </Router>
  );
};

export default App;
