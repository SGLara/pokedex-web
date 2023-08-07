import { useEffect, useState } from 'react';
import { getPokemonsByRegionId } from '../services/pokeapi';

const maxSelection = 6;

export default function usePokemonsByRegion({
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
        const pokemonData = await getPokemonsByRegionId(regionId);
        // Extract the relevant information from the Pokémon data
        const pokemonsSelected = pokemonData.map((pokemon) => ({
          name: pokemon.name,
          avatar: pokemon.sprites.front_default,
          selected: !!pokemons.find((p) => p.name === pokemon.name),
        }));

        setPokemonsAvatars(pokemonsSelected);

        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    };

    fetchPokemons();

    return () => {
      setPokemonsAvatars([]);
    };
  }, [regionId]);

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
  };

  return { loading, error, handlePokemonSelection };
}
