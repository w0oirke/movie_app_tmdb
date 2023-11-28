import React from 'react';
import MovieDetail from '../components/MovieDetail';
import '../styles/DetailPage.sass';

const DetailPage = ({ movie }) => (
  <div>
    <MovieDetail movie={movie} />
  </div>
);

export default DetailPage;
