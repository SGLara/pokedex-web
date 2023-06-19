/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prop-types */
import CreateIcon from '@mui/icons-material/Create';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useRegionList from '../hooks/useRegionList';

export default function RegionList({ firebaseAuth }) {
  const user = firebaseAuth.currentUser;

  const { regions, getRegionId } = useRegionList();

  return (
    <Grid maxWidth="md" container spacing={2}>
      <Grid
        item
        xs={12}
        sx={{
          marginBottom: '1rem',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            marginBottom: '1rem',
          }}
        >
          Hi
          {' '}
          {user.displayName}
          {' '}
          👋 ,
        </Typography>
      </Grid>
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
                to={`/my-teams/create/${getRegionId(region)}/${region.name}`}
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
