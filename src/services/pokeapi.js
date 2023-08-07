import axios from 'axios';

const POKEAPI = import.meta.env.VITE_POKEAPI_URL

async function getPokemonsByRegionId (regionId) {
  const generationResponse = await axios.get(`${POKEAPI}/generation/${regionId}`);
  const generationData = generationResponse.data;

  // Get the Pokémon species from the generation
  const pokemonSpeciesUrls = generationData.pokemon_species.map((species) => species.name);
  const pokemonResponses = await Promise.all(pokemonSpeciesUrls.map((name) => axios.get(`${POKEAPI}/pokemon/${name}`)));
  const pokemonData = pokemonResponses.map((response) => response.data);

  return pokemonData;
};

async function getRegions () {
  const response = await axios.get(`${POKEAPI}/region`);
  const data = response.data.results;

  return data;
}


export {
    getPokemonsByRegionId,
    getRegions
};

