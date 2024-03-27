// MovieDetail.jsx
// import package
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';


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
        <Card style={{ width: '18rem' }}> 
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            loading="lazy"
          />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.overview}</Card.Text>
            <Card.Text>Release Date: {movie.release_date}</Card.Text>
            <Card.Text>Vote Average: {movie.vote_average}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default MovieDetail;
