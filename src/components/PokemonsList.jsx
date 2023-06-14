/* eslint-disable react/prop-types */
import {
  Grid, Paper, IconButton, Avatar, Alert,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const POKEAPI = `${import.meta.env.VITE_POKEAPI_URL}`

export default function PokemonsList({ regionId , pokemons: pokemonsSelected, setPokemons, maxSelection, pokemonsWarningMessage, setPokemonsWarningMessage }) {
  const [pokemonsAvatars, setPokemonsAvatars] = useState([]);
  
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        // Get the generation based on the region ID
        const generationResponse = await axios.get(POKEAPI + `/generation/${regionId}`);
        const generationData = generationResponse.data;

        // Get the Pokémon species from the generation
        const pokemonSpeciesUrls = generationData.pokemon_species.map((species) => species.name);
        const pokemonResponses = await Promise.all(pokemonSpeciesUrls.map((name) => axios.get(POKEAPI + `/pokemon/${name}`)));
        const pokemonData = pokemonResponses.map((response) => response.data);

        // Extract the relevant information from the Pokémon data
        
        const pokemons = pokemonData.map((pokemon) => ({
          name: pokemon.name,
          avatar: pokemon.sprites.front_default,
          disabled: pokemonsSelected.find((p) => p.name === pokemon.name),
        }));

        setPokemonsAvatars(pokemons);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    };

    fetchPokemons();
  }, [regionId, pokemonsSelected]);

  const handlePokemonSelection = (pokemon) => {
    const selectedPokemon = pokemons.find((p) => p.name === pokemon.name);
    const selectedCount = pokemons.length;

    if (selectedCount >= maxSelection && !selectedPokemon) {
      setPokemonsWarningMessage('You can only select up to 6 Pokémon');
      return;
    } else {
      setPokemonsWarningMessage('');
    }

    if (selectedPokemon) {
      setPokemons(pokemons.filter((p) => p.name !== pokemon.name));
    } else {
      setPokemons([...pokemons, pokemon]);
    }

    setPokemonsAvatars((prevPokemonsAvatars) =>
      prevPokemonsAvatars.map((p) =>
        p.name === pokemon.name
          ? { ...p, disabled: !selectedPokemon }
          : p
      )
    );
  }

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
      <Grid
        container
        sx={{
          height: '300px',
          padding: '.5rem 1rem',
          overflowY: "scroll",
          overflowX: "hidden"
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
            <IconButton
              aria-label={`icon-avatar${pokemon.name}`}
              onClick={() => handlePokemonSelection(pokemon)}
              sx={{
                backgroundColor: pokemon.disabled ? '#e3f2fd' : 'transparent',
              }}
            >
              <Avatar
                src={pokemon.avatar}
                alt={pokemon.name}
                sx={{
                  width: 75,
                  height: 75,
                }}
              />
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
