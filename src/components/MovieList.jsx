// MovieList.jsx
// import packages
import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

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
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {movies.map((movie) => (
        <Col key={movie.id}>
          <Card>
            {loadedImages.includes(movie.id) && (
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            )}
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.overview}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
