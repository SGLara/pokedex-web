import { Paper, Typography } from '@mui/material';
import 'firebase/compat/auth';
import React from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { Navigate } from 'react-router';

// eslint-disable-next-line react/prop-types
export default function Login({ isSignedIn, uiConfig, firebaseAuth }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem',
        gap: '3rem',
        backgroundColor: '#272727',
        border: '1px solid #e3f2fd',
        borderRadius: '1rem',
      }}
    >
      {
        isSignedIn && (
          <Navigate to="/regions" />
        )
      }
      <Typography variant="h4">
        Sign In
      </Typography>
      <img src="pokeball-icon.png" alt="pokemon-ball" width={50} />
      <StyledFirebaseAuth
        uiCallback={(ui) => ui.disableAutoSignIn()}
        uiConfig={uiConfig}
        firebaseAuth={firebaseAuth}
      />
    </Paper>
  );
}
