import React from 'react';
import { Container } from '@mui/material';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        border: 1,
        borderColor: 'primary.dark',
      }}
    >
      <Navigation />
    </Container>
  );
}
