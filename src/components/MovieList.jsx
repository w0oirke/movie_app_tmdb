import React from 'react';

const MovieList = ({ movies }) => (
  <div>
    {movies.map((movie) => (
      <div key={movie.id}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
    ))}
  </div>
);

export default MovieList;
