import {
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  CardActions,
  AvatarGroup,
  Chip,
  Button,
  ButtonGroup,
  IconButton,
  Divider,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useListVals } from 'react-firebase-hooks/database';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { db, ref, set } from '../services/firebase.config';

export default function MyTeams() {
  const [values] = useListVals(ref(db, 'my_teams'));
  const [myTeams, setMyTeams] = useState([]);

  useEffect(() => {
    setMyTeams(values);
  }, [values]);

  const handleDelete = (id) => {
    const newTeams = myTeams.filter((team) => team.id !== id);
    setMyTeams(newTeams);
    set(ref(db, 'my_teams'), newTeams);
  };

  return (
    <Grid container maxWidth="md" minWidth={900} spacing={2}>
      {
        myTeams.length === 0 && (
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
        )
      }
      {
        myTeams.map((team) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={team.id}>
            <Card sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '100%',
                padding: '0.5rem',
              }}
              >
                <Typography variant="h4">
                  #
                  {team.id}
                </Typography>
              </div>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h6"
                  sx={{
                    textTransform: 'uppercase',
                  }}
                >
                  {team.name}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  sx={{
                    pb: 2,
                  }}
                >
                  {team.description}
                </Typography>
                <Chip
                  label={team.region?.name}
                  size="small"
                  sx={{
                    backgroundColor: 'white',
                    color: 'black',
                  }}
                />
              </CardContent>
              <CardActions sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              >
                {
                  team.pokemons.length > 0
                  && (
                    <>
                      <AvatarGroup max={4}>
                        {
                        team.pokemons.map((pokemon) => (
                          <Avatar
                            sx={{
                              backgroundColor: 'white',
                            }}
                            key={pokemon.name}
                            alt={pokemon.name}
                            src={pokemon.avatar}
                          />
                        ))
                        }
                      </AvatarGroup>
                      <Divider variant="middle" flexItem sx={{ mt: 2 }} />
                      <ButtonGroup>
                        <IconButton
                          component={Link}
                          to={`/my-teams/edit/${team.id}`}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                        onClick={() => handleDelete(team.id)}
                        >
                          <DeleteIcon sx={{ color: 'red' }} />
                        </IconButton>
                      </ButtonGroup>
                    </>
                  )
                }
              </CardActions>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  );
}
