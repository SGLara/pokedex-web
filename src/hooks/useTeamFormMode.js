import { useEffect, useState } from 'react';
import { useListVals } from 'react-firebase-hooks/database';
import { useNavigate } from 'react-router';
import {
  db, firebase, ref, set,
} from '../services/firebase.config';

const minSelection = 3;

export default function useTeamFormMode({
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
}) {
  const authUserUid = firebase.auth().currentUser.uid;

  const [regionId, setRegionId] = useState(resourceIdURL);
  const [regionName, setRegionName] = useState(regionNameURL);
  const [nameWarning, setNameWarning] = useState(false);
  const [nameWarningMessage, setNameWarningMessage] = useState('');
  const [descriptionWarning, setDescriptionWarning] = useState(false);
  const [descriptionWarningMessage, setDescriptionWarningMessage] = useState('');
  const [, setPokemonsWarning] = useState(false);
  const [pokemonsWarningMessage, setPokemonsWarningMessage] = useState('');

  const [values] = useListVals(ref(db, `pokedex_web/${authUserUid}/teams_created`));

  const navigate = useNavigate();

  useEffect(() => {
    if (values.length > 0) {
      if (routeAction === 'create') {
        const lastTeam = values[values.length - 1];
        const lastTeamId = parseInt(lastTeam.id, 10) + 1;

        setId(lastTeamId.toString());
        setRegionId(resourceIdURL);
        setRegionName(regionNameURL);
      }

      // If the route action is edit, set the team data to the form fields
      if (routeAction === 'edit') {
        const team = values.find((item) => item.id === resourceIdURL);

        setId(team.id);
        setName(team.name);
        setDescription(team.description);
        setRegionId(team.region.id);
        setRegionName(team.region.name);
        setPokemons(team.pokemons);
      }
    } else {
      setId('1');
      setRegionId(resourceIdURL);
      setRegionName(regionNameURL);
    }

    return () => {
      setId('');
      setName('');
      setRegionId('');
      setRegionName('');
      setDescription('');
      setPokemons([]);
    };
  }, [
    values,
    resourceIdURL,
    regionNameURL,
    routeAction,
    regionId,
    regionName,
    setId,
    setName,
    setDescription,
    setPokemons,
  ]);

  const submitForm = (e) => {
    e.preventDefault();

    let hasError = false;

    if (pokemons.length < minSelection) {
      setPokemonsWarning(true);
      setPokemonsWarningMessage('You must select at least 3 Pokémon');
      hasError = true;
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

    if (hasError) {
      return;
    }

    // Submit data to Firebase Realtime Database
    set(ref(db, `pokedex_web/${authUserUid}/teams_created/${id}`), {
      id,
      name,
      region: {
        id: regionId,
        name: regionName,
      },
      description,
      pokemons,
    });

    // Clear form fields
    setId('');
    setName('');
    setRegionId('');
    setRegionName('');
    setDescription('');
    setPokemons([]);

    navigate('/my-teams');
  };

  return {
    submitForm,
    regionName,
    regionId,
    nameWarning,
    nameWarningMessage,
    descriptionWarning,
    descriptionWarningMessage,
    pokemonsWarningMessage,
    setPokemonsWarningMessage,
  };
}
