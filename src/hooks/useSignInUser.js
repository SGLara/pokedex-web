import { onValue } from 'firebase/database';
import { useEffect, useState } from 'react';
import {
  db,
  firebase,
  ref, set,
} from '../services/firebase.config';

export default function useSignInUser() {
  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);

      if (user) {
        // Get the user's data from the database by uid provided by Firebase Auth
        const userRef = ref(db, `pokedex_web/${user.uid}`);
        onValue(userRef, (snapshot) => {
          const userData = snapshot.val();

          if (!userData) {
            // If the user doesn't exist, create a new user in the database
            set(userRef, {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
            });
          }
        });
      }
    });

    setLoading(false);

    return () => unregisterAuthObserver();
  }, []);

  return { loading, isSignedIn, setIsSignedIn };
}
