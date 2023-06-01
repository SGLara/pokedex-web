import {
  Card, CardContent, Grid, Typography, Avatar, CardActions, AvatarGroup, CardActionArea,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from 'react';
import { Link } from 'react-router-dom';

const myTeams = [
  {
    id: 1,
    name: 'Team 1',
    pokemons: [
      {
        id: 25,
        name: 'Pikachu',
        avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      },
      {
        id: 4,
        name: 'Charmander',
        avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      },
      {
        id: 7,
        name: 'Squirtle',
        avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
      },
      {
        id: 1,
        name: 'Bulbasaur',
        avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      },
      {
        id: 150,
        name: 'Mewtwo',
        avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
      },
    ],
  },
  {
    id: 2,
    name: 'Team 2',
    pokemons: [
      {
        id: 6,
        name: 'Charizard',
        avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      },
      {
        id: 150,
        name: 'Mewtwo',
        avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
      },
    ],
  },
  {
    id: 3,
    name: 'Team 3',
    pokemons: [
      {
        id: 6,
        name: 'Charizard',
        avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      },
      {
        id: 150,
        name: 'Mewtwo',
        avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
      },
    ],
  },
  {
    id: 4,
    name: 'Team 4',
    pokemons: [
      {
        id: 6,
        name: 'Charizard',
        avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      },
      {
        id: 150,
        name: 'Mewtwo',
        avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
      },
    ],
  },
  {
    id: 5,
    name: 'Team 5',
    pokemons: [
      {
        id: 6,
        name: 'Charizard',
        avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      },
      {
        id: 150,
        name: 'Mewtwo',
        avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
      },
    ],
  },
];

export default function MyTeams() {
  return (
    <Grid container maxWidth="md" spacing={2}>
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

      {
        myTeams.map((team) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={team.id}>
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
                  {team.name}
                </Typography>
              </CardContent>
              <CardActions>
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
