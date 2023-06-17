import { Grid, Skeleton } from '@mui/material';
import React from 'react';

export default function PokemonListSkeleton() {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        height: '300px',
        padding: '.5rem 1rem',
        overflowY: 'scroll',
        overflowX: 'hidden',
      }}
    >
      {
            Array.from(Array(27).keys()).map((index) => (
              <Grid
                item
                key={index}
                xs={3}
                sm={2}
                md={2}
                lg={1.3}
              >
                <Skeleton variant="circular" width={85} height={85} />
              </Grid>
            ))
       }
    </Grid>
  );
}
