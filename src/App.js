// import packages
import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// import file
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = process.env.REACT_APP_TMDB_API_KEY;

  const searchMovies = async (query) => {
    try {
      setLoading(true);
      const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: apiKey,
          query: query
        }
      });
      setMovies(response.data.results);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    } finally {
      setLoading(false);
    }
  };

  const selectMovie = (movie) => {
    setSelectedMovie(movie);
  };


  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (selectedMovie) {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${selectedMovie.id}`, {
            params: {
              api_key: apiKey,
            }
          });
          setSelectedMovie(response.data);
        } catch (error) {
          console.error('Failed to fetch movie details:', error);
        }
      }
    };

    fetchMovieDetails();
  }, [selectedMovie, apiKey]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage movies={movies} onSearch={searchMovies} onSelect={selectMovie} loading={loading} />} />
        <Route
          path="/detail/:id"
          element={selectedMovie ? <DetailPage movie={selectedMovie} /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
