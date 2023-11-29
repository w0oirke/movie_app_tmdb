import React from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router
import MovieDetail from '../components/MovieDetail';
import '../styles/DetailPage.sass';

const DetailPage = ({ movie }) => {
  // Check if the movie prop exists
  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="detail-page">
      <Link to="/">Back to Home</Link> {/* Adjust the link based on your routing setup */}
      <MovieDetail movie={movie} />
    </div>
  );
};

export default DetailPage;
