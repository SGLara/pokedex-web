import React from 'react';
import { Container } from '@mui/material';
import RegionList from './components/RegionList';

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
      <RegionList />
    </Container>
  );
}
