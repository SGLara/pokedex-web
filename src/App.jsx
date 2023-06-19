/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router';
import Login from './pages/Auth/Login';
import RegionList from './pages/RegionList';
import MyTeams from './pages/MyTeams';
import CreateTeamForm from './pages/CreateTeamForm';
import {
  uiConfig, firebase,
} from './services/firebase.config';
import ProtectedRoute from './pages/Auth/ProtectedRoute';
import Navbar from './components/Navbar';
import NotFoundGame from './pages/404';
import useSignInUser from './hooks/useSignInUser';

export default function App() {
  const { loading, isSignedIn, setIsSignedIn } = useSignInUser();

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
          <Route path="*" element={<NotFoundGame />} />
        </Routes>
      </Container>
    </>
  );
}
