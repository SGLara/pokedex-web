import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router';
import Login from './pages/Auth/Login';
import RegionList from './pages/RegionList';
import MyTeams from './pages/MyTeams';
import CreateTeamForm from './pages/CreateTeamForm';
import { uiConfig, firebase } from './services/firebase.config';
import ProtectedRoute from './pages/Auth/ProtectedRoute';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
    });

    return () => unregisterAuthObserver();
  }, []);

  return (
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
              <RegionList />
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
          path="/my-teams/create/:id/:regionName"
          element={(
            <ProtectedRoute isSignedIn={isSignedIn}>
              <CreateTeamForm />
            </ProtectedRoute>
          )}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}
