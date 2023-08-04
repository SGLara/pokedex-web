import axios from 'axios';
import { useEffect, useState } from 'react';

const POKEAPI = import.meta.env.VITE_POKEAPI_URL

const maxSelection = 6;

export default function usePokemonsByRegion ({
  regionId,
  setPokemonsAvatars,
  pokemons,
  setPokemons,
  setPokemonsWarningMessage,
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchPokemons = async () => {
      try {
        // Get the generation based on the region ID
        const generationResponse = await axios.get(`${POKEAPI}/generation/${regionId}`);
        const generationData = generationResponse.data;

        // Get the Pokémon species from the generation
        const pokemonSpeciesUrls = generationData.pokemon_species.map((species) => species.name);
        const pokemonResponses = await Promise.all(pokemonSpeciesUrls.map((name) => axios.get(`${POKEAPI}/pokemon/${name}`)));
        const pokemonData = pokemonResponses.map((response) => response.data);

        // Extract the relevant information from the Pokémon data
        const pokemonsSelected = pokemonData.map((pokemon) => ({
          name: pokemon.name,
          avatar: pokemon.sprites.front_default,
          selected: !!pokemons.find((p) => p.name === pokemon.name),
        }));

        setPokemonsAvatars(pokemonsSelected);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.error('Error fetching Pokémon:', error);
      }
    };

    fetchPokemons();

    return () => {
      setPokemonsAvatars([]);
    };
  }, [regionId, pokemons]);

  const handlePokemonSelection = (pokemon) => {
    const selectedPokemon = pokemons.find((p) => p.name === pokemon.name);
    const selectedCount = pokemons.length;

    if (selectedCount >= maxSelection && !selectedPokemon) {
      setPokemonsWarningMessage('You can only select up to 6 Pokémon');
      return;
    }
    setPokemonsWarningMessage('');

    if (selectedPokemon) {
      setPokemons(pokemons.filter((p) => p.name !== pokemon.name));
    } else {
      setPokemons([...pokemons, pokemon]);
    }

    setPokemonsAvatars(
      (prevPokemonsAvatars) => prevPokemonsAvatars.map(
        (p) => (p.name === pokemon.name
          ? { ...p, selected: !selectedPokemon }
          : p),
      ),
    );
  }
    
    return { loading, error, handlePokemonSelection };
}
