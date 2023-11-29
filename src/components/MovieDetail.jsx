import React, { useState, useEffect } from 'react';
import '../styles/MovieDetail.sass';

const MovieDetail = ({ movie }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [movie.poster_path]);

  return (
    <div className="movie-detail">
      {imageLoaded && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          loading="lazy"
          className="movie-poster"
        />
      )}
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Vote Average: {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
