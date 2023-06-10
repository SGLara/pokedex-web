/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {
  TextField, Button, Grid, Paper,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useListVals } from 'react-firebase-hooks/database';
import { db, ref, set } from '../services/firebase.config';
import PokemonsList from '../components/PokemonsList';

const maxSelection = 6;
const minSelection = 3;

export default function CreateTeamForm() {
  const { id: regionId, regionName } = useParams();

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [region, setRegion] = useState(regionName);
  // note: this will be updated by the PokemonsList component, this are the ones user will select
  const [pokemons, setPokemons] = useState([]);

  const [idWarning, setIdWarning] = useState();
  const [idWarningMessage, setIdWarningMessage] = useState(false);
  const [nameWarning, setNameWarning] = useState();
  const [nameWarningMessage, setNameWarningMessage] = useState(false);
  const [descriptionWarning, setDescriptionWarning] = useState();
  const [descriptionWarningMessage, setDescriptionWarningMessage] = useState(false);
  const [regionWarning, setRegionWarning] = useState();
  const [regionWarningMessage, setRegionWarningMessage] = useState(false);
  const [setPokemonsWarning] = useState();
  const [pokemonsWarningMessage, setPokemonsWarningMessage] = useState('You must select at least 3 Pokémon');

  const [values] = useListVals(ref(db, 'my_teams'));

  const navigate = useNavigate();

  // useEffect to get the last team id and set it to the id state
  useEffect(() => {
    if (values.length > 0) {
      const lastTeam = values[values.length - 1];
      const lastTeamId = parseInt(lastTeam.id, 10);

      setId(lastTeamId + 1);
    } else {
      setId(1);
    }
  }, [values]);

  // const snapshots = ref(db, 'my_teams/');
  // onValue(snapshots, (snapshot) => {
  // const data = snapshot.val();

  // console.log(data);
  // });

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (pokemons.length < minSelection) {
      setPokemonsWarning(true);
      setPokemonsWarningMessage('You must select at least 3 Pokémon');
      hasError = true;
    }

    if (id === '') {
      setIdWarning(true);
      setIdWarningMessage('Team ID is required');
      hasError = true;
    } else {
      setIdWarning(false);
      setIdWarningMessage('');
    }

    if (name === '') {
      setNameWarning(true);
      setNameWarningMessage('Team Name is required');
      hasError = true;
    } else {
      setNameWarning(false);
      setNameWarningMessage('');
    }

    if (description === '') {
      setDescriptionWarning(true);
      setDescriptionWarningMessage('Description is required');
      hasError = true;
    } else {
      setDescriptionWarning(false);
      setDescriptionWarningMessage('');
    }

    if (region === '') {
      setRegionWarning(true);
      setRegionWarningMessage('Region is required');
      hasError = true;
    } else {
      setRegionWarning(false);
      setRegionWarningMessage('');
    }

    if (hasError) {
      return;
    }

    // Submit data to Firebase Realtime Database
    set(ref(db, `my_teams/${id}`), {
      id,
      name,
      region,
      description,
      pokemons,
    });

    // Clear form fields
    setId('');
    setName('');
    setDescription('');
    setPokemons([]);

    navigate('/my-teams');
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
              label="Team ID"
              value={id}
              error={idWarning}
              helperText={idWarningMessage}
              onChange={(e) => setId(e.target.value)}
              fullWidth
              disabled
            />
            <TextField
              label="Team Name"
              value={name}
              error={nameWarning}
              helperText={nameWarningMessage}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
            <TextField
              label="Region"
              value={region}
              error={regionWarning}
              helperText={regionWarningMessage}
              onChange={(e) => setRegion(e.target.value)}
              fullWidth
              disabled
            />
          </Grid>
          <Grid item xs={6}>
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
          {/*
          Todo: add scroll to this component
           */}
          <Grid item xs={12}>
            <PokemonsList
              regionId={regionId}
              pokemons={pokemons}
              setPokemons={setPokemons}
              minSelection={minSelection}
              maxSelection={maxSelection}
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
