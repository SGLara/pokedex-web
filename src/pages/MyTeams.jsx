import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Avatar,
  AvatarGroup,
  Box,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Chip,
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
    <Grid
      container
      spacing={2}
      maxWidth="lg"
      sx={{
        '@media (max-width: 600px)': {
          paddingTop: '6rem',
          paddingBottom: '2rem',
        },
        '@media (max-width: 1199px)': {
          paddingTop: '6rem',
          paddingBottom: '2rem',
        },
      }}
    >
      {
        myTeams.length === 0 && (
        <NoTeamsAvailable />
        )
      }
      {
        myTeams.map((team) => (
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            lg={4}
            key={team.id}
            sx={{
              // padding: '0px !important',
            }}
          >
            <Card sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignContent: 'space-between',
              height: '100%',
            }}
            >
              <Box style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '100%',
              }}
              >
                <Typography variant="h4">
                  #
                  {team.id}
                </Typography>
              </Box>
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
                {
                team.pokemons.length > 0
                && (
                <AvatarGroup
                  max={4}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '1rem',
                  }}
                >
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
                )
              }
              </CardContent>

              <CardActions sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              >
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
              </CardActions>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  );
}
