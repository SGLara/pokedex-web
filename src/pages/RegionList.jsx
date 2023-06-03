import {
  Grid, Card, CardContent, Typography, CardActions, Button,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import axios from 'axios';
import { Link } from 'react-router-dom';

const POKEAPI = `${import.meta.env.VITE_POKEAPI_URL}/region`;

export default function RegionList() {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    axios.get(POKEAPI)
      .then((response) => {
        setRegions(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching regions:', error);
      });
  }, []);

  return (
    <Grid maxWidth="md" container spacing={2}>
      {regions.map((region) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={region.name}>
          <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <CardContent>
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  textTransform: 'uppercase',
                }}
              >
                {region.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                disableElevation
                size="small"
                startIcon={<CreateIcon />}
                component={Link}
                to="/my-teams/create"
              >
                Create Team
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
