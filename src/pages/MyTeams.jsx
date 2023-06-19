import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Avatar,
  AvatarGroup,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import NoTeamsAvailable from '../components/NoTeamsAvailable';
import useMyTeams from '../hooks/useMyTeams';

export default function MyTeams() {
  const { myTeams, destroy } = useMyTeams();

  const handleDelete = (teamId) => {
    destroy(teamId);
  };

  return (
    <Grid container maxWidth="md" minWidth={900} spacing={2}>
      {
        myTeams.length === 0 && (
        <NoTeamsAvailable />
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
                  label={team.region.name}
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
