// DetailPage.jsx
// import package
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

// import file
import MovieDetail from '../components/MovieDetail';

const DetailPage = ({ movie }) => {
  if (!movie) {
    return <p>영화를 찾지 못했습니다</p>;
  }

  return (
    <Container className="detail-page">
      <Row>
        <Col>
          <MovieDetail movie={movie} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/" className="btn btn-primary">뒤로</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailPage;
