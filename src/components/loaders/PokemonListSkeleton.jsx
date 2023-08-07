import { Grid, Skeleton } from '@mui/material';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

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
            Array.from(Array(27).keys()).map(() => (
              <Grid
                item
                key={uuidv4()}
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
