import React from 'react';
import { Container, Heading, Message } from './NotFoundStyled';

const NotFound = () => {
  return (
    <Container>
      <Heading>Page Not Found</Heading>
      <Message>The page you're looking for doesn't exist.</Message>
    </Container>
  );
};

export default NotFound;
