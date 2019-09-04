import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Error from '../UI/Error';

const ArticleListing = ({ error, loading, articles }) => {
  // Error
  if (error) return <Error content={error} />;

  // Build Cards for Listing
  const cards = articles.map(item => (
    <Card key={`${item.id}`}>
      <Link to={`/article/${item.id}`}>
        <CardImg top src={item.image} alt={item.title} />
      </Link>
      <CardBody>
        <CardTitle>{item.title}</CardTitle>
        <CardText>{item.body}</CardText>
        <Link className="btn btn-primary" to={`/article/${item.id}`}>
          View Article
          {' '}
          <i className="icon-arrow-right" />
        </Link>
      </CardBody>
    </Card>
  ));

  // Show Listing
  return (
    <div>
      <Row className="pt-4 pt-sm-0">
        <Col sm="12">
          <h1>Articles</h1>
          <p>The following data is read directly from Firebase.</p>
        </Col>
      </Row>
      <Row className={loading ? 'content-loading' : ''}>
        <Col sm="12" className="card-columns">{cards}</Col>
      </Row>
    </div>
  );
};

ArticleListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  articles: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

ArticleListing.defaultProps = {
  error: null,
};

export default ArticleListing;
