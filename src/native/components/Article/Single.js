import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import {
  Container, Content, Card, CardItem, Body, H3, List, ListItem, Text,
} from 'native-base';
import { errorMessages } from '../../../constants/messages';
import Error from '../UI/Error';
import Spacer from '../UI/Spacer';

const ArticleView = ({
  error, articles, articleId,
}) => {
  // Error
  if (error) return <Error content={error} />;

  // Get this Article from all articles
  let article = null;
  if (articleId && articles) {
    article = articles.find(item => parseInt(item.id, 10) === parseInt(articleId, 10));
  }

  // Article not found
  if (!article) return <Error content={errorMessages.article404} />;


  return (
    <Container>
      <Content padder>
        <Image source={{ uri: article.image }} style={{ height: 100, width: null, flex: 1 }} />

        <Spacer size={25} />
        <H3>{article.title}</H3>
        <Text>
          by
          {' '}
          {article.author}
        </Text>
        <Spacer size={15} />

        <Card>
          <CardItem header bordered>
            <Text>About this article</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{article.body}</Text>
            </Body>
          </CardItem>
        </Card>

        <Spacer size={20} />
      </Content>
    </Container>
  );
};

ArticleView.propTypes = {
  error: PropTypes.string,
  articleId: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

ArticleView.defaultProps = {
  error: null,
};

export default ArticleView;
