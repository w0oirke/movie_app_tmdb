import React from 'react';
import '../styles/MovieDetail.sass';

const MovieDetail = ({ movie }) => (
  <div>
    <img
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title}
      style={{ maxWidth: '1px', height: '1px' }} // Adjust the styling here
    />
    <h2>{movie.title}</h2>
    <p>{movie.overview}</p>
    <p>{movie.release_date}</p>
    <p>{movie.vote_average}</p>
  </div>
);

export default MovieDetail;
