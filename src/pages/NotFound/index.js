import React from 'react';

import { Container, ButtonLink } from './styles';

export default function NotFound() {
  return (
    <Container>
      <h1>404</h1>
      <p>Ops... Page not found</p>
      <ButtonLink to="/">Back to Home</ButtonLink>
    </Container>
  );
}
