import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

export default function Login() {
  return (
    <Paper
      elevation={8}
      variant="outlined"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem',
        gap: '7rem',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid #ff0000',
      }}
    >
      <Typography variant="h5">
        Please Login to use this amazing app!
      </Typography>
      <Box>
        <FacebookLoginButton />
        <GoogleLoginButton />
      </Box>
    </Paper>
  );
}
