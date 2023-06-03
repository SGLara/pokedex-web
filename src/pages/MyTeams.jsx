import {
  Card, CardContent, Grid, Typography, Avatar, CardActions, AvatarGroup, Chip,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useList } from 'react-firebase-hooks/database';
import { db, ref } from '../services/firebase.config';
import CreateTeamButton from '../components/CreateTeamButton';

export default function MyTeams() {
  const [snapshots] = useList(ref(db, 'my_teams'));
  const [myTeams, setMyTeams] = useState([]);

  useEffect(() => {
    const teams = [];

    snapshots.forEach((snapshot) => {
      teams.push(snapshot.val());
    });

    setMyTeams(teams);
  }, [snapshots]);

  return (
    <Grid container maxWidth="md" spacing={2}>
      <CreateTeamButton />
      {
        myTeams.map((team) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={team.id}>
            <Card sx={{
              display: 'flex',
              flexDirection: 'column',
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
                  label={team.type}
                  size="small"
                  sx={{
                    backgroundColor: 'white',
                    color: 'black',
                  }}
                />
              </CardContent>
              <CardActions sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 3,
              }}
              >
                {console.log(team.pokemons)}
                {
                  team.pokemons.length > 1
                  && (
                    <AvatarGroup max={4}>
                      {
                        team.pokemons.map((pokemon) => (
                          <Avatar
                            sx={{
                              backgroundColor: 'white',
                            }}
                            key={pokemon.id}
                            alt={pokemon.name}
                            src={pokemon.avatar}
                          />
                        ))
                      }
                    </AvatarGroup>
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
