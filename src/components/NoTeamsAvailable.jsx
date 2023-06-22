import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NoTeamsAvailable() {
  return (
    <Grid
      item
      xs={12}
      sx={{
        color: '#272727',
      }}
    >
      <Typography variant="h2" component="h1" align="center">
        There are no teams yet
        {' '}
        <br />
        <img src="pokeball-icon.png" alt="pokemon-ball" width={100} />
      </Typography>
      <Typography variant="h4" component="h2" align="center">
        Please create one in the
        <Button
          variant="contained"
          component={Link}
          color="primary"
          to="/regions"
          sx={{
            mx: 1,
            bgcolor: '#272727',
            color: '#fff',
            '&:hover': {
              bgcolor: '#474747',
            },
          }}
        >
          Region List
        </Button>
        page
      </Typography>
    </Grid>
  );
}
