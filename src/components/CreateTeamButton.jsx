import { Card, CardActionArea, Grid } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';
import React from 'react';

export default function CreateTeamButton() {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{
        height: '100%',
      }}
      >
        <CardActionArea
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
          component={Link}
          to="/my-teams/create"
        >
          <AddCircleIcon sx={{ color: 'gray', fontSize: 75 }} />
        </CardActionArea>
      </Card>
    </Grid>
  );
}
