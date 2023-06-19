import { useEffect, useState } from 'react';
import { useListVals } from 'react-firebase-hooks/database';
import {
  db,
  firebase,
  ref, set,
} from '../services/firebase.config';

export default function useMyTeams() {
  const authUserUid = firebase.auth().currentUser.uid;
  const [values] = useListVals(ref(db, `pokedex_web/${authUserUid}/teams_created`));
  const [myTeams, setMyTeams] = useState([]);

  useEffect(() => {
    setMyTeams(values);

    return () => {
      setMyTeams([]);
    };
  }, [values]);

  const destroy = (id) => {
    const newTeams = myTeams.filter((team) => team.id !== id);
    setMyTeams(newTeams);
    set(ref(db, `pokedex_web/${authUserUid}/teams_created`), newTeams);
  };

  return { myTeams, destroy };
}
