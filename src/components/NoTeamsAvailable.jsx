import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NoTeamsAvailable() {
  return (
    <Grid item xs={12}>
      <Typography variant="h2" component="h1" align="center">
        There are no teams yet
        {' '}
        <br />
        😧
      </Typography>
      <Typography variant="h4" component="h2" align="center">
        Please create one in the
        <Button
          variant="outlined"
          component={Link}
          color="primary"
          to="/regions"
          sx={{
            mx: 1,
          }}
        >
          Region List
        </Button>
        page
      </Typography>
    </Grid>
  );
}
