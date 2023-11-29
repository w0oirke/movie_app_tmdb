import React, { useState, useEffect } from 'react';
import '../styles/MovieList.sass';

const MovieList = ({ movies }) => {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const loadImage = (src, id) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages((prevLoadedImages) => [...prevLoadedImages, id]);
      };
    };

    movies.forEach((movie) => {
      loadImage(`https://image.tmdb.org/t/p/w500${movie.poster_path}`, movie.id);
    });
  }, [movies]);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          {loadedImages.includes(movie.id) && (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          )}
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
