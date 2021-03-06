import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ArticleListing extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    articles: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    match: PropTypes.shape({ params: PropTypes.shape({}) }),
    fetchArticles: PropTypes.func.isRequired,
    fetchCategories: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  state = {
    error: null,
    loading: false,
  }

  componentDidMount = () => this.fetchData();

  fetchData = (data) => {
    const { fetchArticles, fetchCategories } = this.props;

    this.setState({ loading: true });

    return fetchArticles(data)
      .then(() => fetchCategories())
      .then(() => this.setState({
        loading: false,
        error: null,
      })).catch(err => this.setState({
        loading: false,
        error: err,
      }));
  }

  render = () => {
    const { Layout, articles, match } = this.props;
    const { loading, error } = this.state;
    const id = (match && match.params && match.params.id) ? match.params.id : null;

    return (
      <Layout
        articleId={id}
        error={error}
        loading={loading}
        articles={articles}
        reFetch={() => this.fetchData()}
      />
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles.articles || {},
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: dispatch.articles.getCategories,
  fetchArticles: dispatch.articles.getArticles,
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListing);
