import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { errorMessages } from '../../../constants/messages';
import Loading from '../UI/Loading';
import Error from '../UI/Error';

const ArticleView = ({
  error, loading, articles, articleId,
}) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  // Get this Article from all articles
  let article = null;
  if (articleId && articles) {
    article = articles.find(item => parseInt(item.id, 10) === parseInt(articleId, 10));
  }

  // Article not found
  if (!article) return <Error content={errorMessages.article404} />;

  // Build Ingredients listing
  const ingredients = article.ingredients.map(item => (
    <ListGroupItem key={`${item}`}>{item}</ListGroupItem>
  ));

  // Build Method listing
  const method = article.method.map(item => (
    <ListGroupItem key={`${item}`}>{item}</ListGroupItem>
  ));

  return (
    <div>
      <Helmet>
        <title>{article.title}</title>
      </Helmet>

      <Row className="pt-4 pt-sm-0">
        <Col sm="12">
          <h1>{article.title}</h1>
          <p>
            by
            {' '}
            {article.author}
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg="4" className="article-view-card">
          <Card>
            <CardHeader>About this article</CardHeader>
            <CardBody>
              <CardText>{article.body}</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" className="article-view-card">
          <Card>
            <CardHeader>Ingredients</CardHeader>
            <ListGroup className="list-group-flush">{ingredients}</ListGroup>
          </Card>
        </Col>
        <Col lg="4" className="article-view-card">
          <Card>
            <CardHeader>Method</CardHeader>
            <ListGroup className="list-group-flush">{method}</ListGroup>
          </Card>
        </Col>
      </Row>
      <Row className="pt-5 pb-3">
        <Col sm="12">
          <Link className="btn btn-secondary" to="/articles">
            <i className="icon-arrow-left" />
            {' '}
            Back
          </Link>
        </Col>
      </Row>
    </div>
  );
};

ArticleView.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  articleId: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

ArticleView.defaultProps = {
  error: null,
};

export default ArticleView;
