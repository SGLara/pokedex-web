/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { Container } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import PikachuLoading from './components/loaders/PikachuLoading';
import useSignInUser from './hooks/useSignInUser';
import NotFoundGame from './pages/404';
import Login from './pages/Auth/Login';
import ProtectedRoute from './pages/Auth/ProtectedRoute';
import CreateTeamForm from './pages/CreateTeamForm';
import MyTeams from './pages/MyTeams';
import RegionList from './pages/RegionList';

import {
  firebase,
  uiConfig,
} from './services/firebase.config';

export default function App() {
  const { loading, isSignedIn, setIsSignedIn } = useSignInUser();

  return (
    loading
      ? (
        <Container
          maxWidth="xl"
          sx={{
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%',
            backgroundColor: '#fee939',
            padding: '0',
            margin: '0',
          }}
        >
          <PikachuLoading />
        </Container>
      )
      : <RenderedView isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
  );
}

function RenderedView({ isSignedIn, setIsSignedIn }) {
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
  );
}
