import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { Navigate } from 'react-router';
import 'firebase/compat/auth';

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
        gap: '7rem',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid #e3f2fd',
      }}
    >
      {
        isSignedIn && (
          <Navigate to="/regions" />
        )
      }
      <Typography variant="h5">
        Please Login to use this amazing app!
      </Typography>
      <Box>
        <StyledFirebaseAuth
          uiCallback={(ui) => ui.disableAutoSignIn()}
          uiConfig={uiConfig}
          firebaseAuth={firebaseAuth}
        />
      </Box>
    </Paper>
  );
}
