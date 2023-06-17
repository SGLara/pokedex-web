import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router';
import { onValue } from 'firebase/database';
import Login from './pages/Auth/Login';
import RegionList from './pages/RegionList';
import MyTeams from './pages/MyTeams';
import CreateTeamForm from './pages/CreateTeamForm';
import {
  uiConfig, firebase, db, ref, set,
} from './services/firebase.config';
import ProtectedRoute from './pages/Auth/ProtectedRoute';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // Listen to the Firebase Auth state and set the local state.
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
            console.log(userData);
          }
        });
      }
    });

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => unregisterAuthObserver();
  }, []);

  return (
    <>
      {
        loading && (
          <Container
            maxWidth="lg"
            sx={{
              display: 'grid',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <img src="/pokemon-pikachu.gif" alt="Pikachu loading" width={200} />
          </Container>
        )
      }
      <Container
        maxWidth="lg"
        sx={{
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        {
        isSignedIn && (
          <Navbar
            isSignedIn={isSignedIn}
            setIsSignedIn={setIsSignedIn}
            firebaseAuth={firebase.auth()}
          />
        )
        }
        <Routes>
          <Route
            exact
            path="/"
            element={(
              <Login
                isSignedIn={isSignedIn}
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
              />
            )}
          />
          <Route
            path="/regions"
            element={(
              <ProtectedRoute isSignedIn={isSignedIn}>
                <RegionList
                  firebaseAuth={firebase.auth()}
                />
              </ProtectedRoute>
          )}
          />
          <Route
            path="/my-teams"
            element={(
              <ProtectedRoute isSignedIn={isSignedIn}>
                <MyTeams />
              </ProtectedRoute>
          )}
          />
          <Route
            path="/my-teams/:routeAction/:resourceIdURL/:regionNameURL?"
            element={(
              <ProtectedRoute isSignedIn={isSignedIn}>
                <CreateTeamForm />
              </ProtectedRoute>
          )}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}
