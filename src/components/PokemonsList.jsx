/* eslint-disable react/prop-types */
import {
  Alert,
  Button,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePokemonsByRegion from '../hooks/usePokemonsByRegion';
import PokemonItem from './PokemonItem';
import PokemonListSkeleton from './loaders/PokemonListSkeleton';

export default function PokemonsList({
  regionId,
  pokemons,
  setPokemons,
  pokemonsWarningMessage,
  setPokemonsWarningMessage,
}) {
  const [pokemonsAvatars, setPokemonsAvatars] = useState([]);
  const navigate = useNavigate();

  const {
    loading, error, handlePokemonSelection,
  } = usePokemonsByRegion({
    regionId,
    setPokemonsAvatars,
    pokemons,
    setPokemons,
    setPokemonsWarningMessage,
  });

  const handleClick = (pokemon) => {
    handlePokemonSelection(pokemon);
  };

  const handleGoBack = () => {
    navigate('/regions');
  };

  return (
    <Paper>
      {
        pokemonsWarningMessage && (
          <Alert severity="warning">{pokemonsWarningMessage}</Alert>
        )
      }
      {
        error && (
          <Alert severity="error">Error fetching Pokémon</Alert>
        )
      }
      {
        loading ? (
          <PokemonListSkeleton />
        ) : (
          <Grid
            container
            sx={{
              maxHeight: '300px',
              display: 'flex',
              justifyContent: 'center',
              padding: '.5rem 1rem',
              overflowY: 'auto',
              overflowX: 'hidden',
            }}
          >
            {
              pokemonsAvatars.length > 0
                ? pokemonsAvatars.map((pokemon) => (
                  <Grid
                    item
                    xs={3}
                    sm={2}
                    md={2}
                    lg={1.3}
                    key={pokemon.name}
                  >
                    <PokemonItem
                      pokemon={pokemon}
                      handleClick={handleClick}
                    />
                  </Grid>
                ))
                : (
                  <Paper sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem',
                  }}
                  >
                    <Typography variant="h6">No pokemons found</Typography>
                    <Typography variant="body1">Try another region</Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ marginTop: '1rem' }}
                      onClick={handleGoBack}
                    >
                      Go back
                    </Button>
                  </Paper>
                )
            }
          </Grid>
        )
      }
    </Paper>
  );
}
