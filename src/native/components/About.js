import React from 'react';
import {
  Container, Content, Text, H1, H2, H3, Image,
} from 'native-base';
// import Image from 'react-native';
import Spacer from './UI/Spacer';

const About = () => (
    <Container>
      <Content padder>
        <Spacer size={30} />
        <H1>
          Welcome to the Halifax Digital Conference!!!
        </H1>
        <Spacer size={10} />
        <Text>
          This is a GitHub project to allow you to get started, it is based on an open source starter kit.
          {' '}
        </Text>

        <Spacer size={30} />
        <H2>
          React Native
        </H2>
        <Spacer size={10} />
        <Text>
          Amongst other things this starter kit includes React Native, allowing you to create Single Page Applications
          that load into Web Views within a native mobile application for various OS'.
          {' '}
        </Text>

        <Spacer size={30} />
        <H3>
          Javascript
        </H3>
        <Spacer size={10} />
        <Text>
          React uses JSX which is a Javascript based
          tag embedding language; this allows you to write Javascript in a simple way that embeds HTML like objects
          directly in its syntax. What does that mean!?!? It is easier and quicker to use, but the learning curve
          can be steap for beginners.
          {' '}
        </Text>
      </Content>
    </Container>
);

export default About;
