/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prop-types */
import CreateIcon from '@mui/icons-material/Create';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
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
    <Grid
      maxWidth="md"
      container
      spacing={2}
      sx={{
        '@media (max-width: 600px)': {
          marginTop: '5rem',
          marginBottom: '5rem',
          padding: '0 1rem',
        },
      }}
    >
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
            color: '#272727',
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
        <Grid item xs={6} sm={4} md={3} lg={3} key={region.name}>
          <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2.5rem 0',
            borderRadius: '50%',
            // change the padding when screen size changes
            '@media (max-width: 600px)': {
              padding: '2rem 0',
            },
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
            <Divider
              variant="fullWidth"
              flexItem
              sx={{
                borderTop: '1px solid #ffcb05',
              }}
            />
            <CardActions>
              <Button
                variant="contained"
                disableElevation
                size="small"
                startIcon={<CreateIcon />}
                component={Link}
                to={`/my-teams/create/${getRegionId(region)}/${region.name}`}
              >
                Create
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
