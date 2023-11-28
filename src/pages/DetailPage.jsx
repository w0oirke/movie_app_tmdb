import React from 'react';
import MovieDetail from '../components/MovieDetail';

const DetailPage = ({ movie }) => (
  <div>
    <MovieDetail movie={movie} />
  </div>
);

export default DetailPage;
