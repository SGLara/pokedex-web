import { Container } from '@mui/material';
import React from 'react';

export default function PikachuLoading() {
  return (
    <Container
      maxWidth="xxl"
      sx={{
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        backgroundColor: '#fee939',
        padding: '0',
        margin: '0',
      }}
    >
      <img src="/pokemon-pikachu.gif" alt="Pikachu loading" width={200} />
    </Container>
  );
}
