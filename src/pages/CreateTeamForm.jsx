/* eslint-disable react/prop-types */
import {
  Button, Grid, Paper,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonsList from '../components/PokemonsList';
import useTeamFormMode from '../hooks/useTeamFormMode';

export default function CreateTeamForm() {
  const {
    routeAction, resourceIdURL, regionNameURL,
  } = useParams();

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [pokemons, setPokemons] = useState([]);

  const {
    submitForm,
    regionName,
    regionId,
    nameWarning,
    nameWarningMessage,
    descriptionWarning,
    descriptionWarningMessage,
    pokemonsWarningMessage,
    setPokemonsWarningMessage,
  } = useTeamFormMode({
    resourceIdURL,
    regionNameURL,
    routeAction,
    id,
    setId,
    name,
    setName,
    description,
    setDescription,
    pokemons,
    setPokemons,
  });

  const handleSubmit = (e) => {
    submitForm(e);
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem',
        backgroundColor: '#272727',
        border: '1px solid #e3f2fd',
      }}
    >
      <form
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <TextField
              label="Team Name"
              value={name}
              error={nameWarning}
              helperText={nameWarningMessage}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              autoComplete="off"
            />
            <TextField
              label="Description"
              value={description}
              error={descriptionWarning}
              helperText={descriptionWarningMessage}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              multiline
              rows={4}
              sx={{
                height: '100%',
              }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <TextField
              label="Team ID"
              value={id}
              fullWidth
              disabled
            />
            <TextField
              label="Region"
              value={regionName}
              fullWidth
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <PokemonsList
              regionId={regionId}
              pokemons={pokemons}
              setPokemons={setPokemons}
              setPokemonsWarningMessage={setPokemonsWarningMessage}
              pokemonsWarningMessage={pokemonsWarningMessage}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
