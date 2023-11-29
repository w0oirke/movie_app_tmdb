import React from 'react';
import { Link } from 'react-router-dom'; 
import MovieDetail from '../components/MovieDetail';
import '../styles/DetailPage.sass';

const DetailPage = ({ movie }) => {
  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="detail-page">
      <MovieDetail movie={movie} />
    </div>
  );
};

export default DetailPage;
