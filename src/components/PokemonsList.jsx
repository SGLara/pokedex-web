/* eslint-disable react/prop-types */
import {
  Alert,
  Grid,
  Paper,
} from '@mui/material';
import React, { useState } from 'react';
import usePokemonsByRegion from '../hooks/usePokemonsByRegion';
import PokemonItem from './PokemonItem';
import PokemonListSkeleton from './skeletons_loaders/PokemonListSkeleton';

export default function PokemonsList({
  regionId,
  pokemons,
  setPokemons,
  pokemonsWarningMessage,
  setPokemonsWarningMessage,
}) {
  const [pokemonsAvatars, setPokemonsAvatars] = useState([]);

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

  return (
    <Paper sx={{
      margin: '1.5rem 0',
    }}
    >
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
              height: '300px',
              display: 'flex',
              justifyContent: 'center',
              padding: '.5rem 1rem',
              overflowY: 'auto',
              overflowX: 'hidden',
            }}
          >
            {pokemonsAvatars.map((pokemon) => (
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
            ))}
          </Grid>
        )
      }
    </Paper>
  );
}
