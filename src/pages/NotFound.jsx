/* eslint-disable react/no-unescaped-entities */
import { Box, Typography } from '@mui/material';
import React from 'react';

export default function NotFound() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    >
      <Typography variant="h1">
        🚧  404  🚧
      </Typography>
      <Typography variant="h2" component="p">
        Not Found
      </Typography>
    </Box>
  );
}
