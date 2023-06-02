import React from 'react';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router';
import Login from './pages/Auth/Login';
import RegionList from './pages/RegionList';
import MyTeams from './pages/MyTeams';
import CreateTeamForm from './pages/CreateTeamForm';

export default function App() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        border: 1,
        borderColor: 'primary.dark',
      }}
    >
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/regions" element={<RegionList />} />
        <Route path="/my-teams" element={<MyTeams />} />
        <Route path="/my-teams/create" element={<CreateTeamForm />} />
        {/* <Route
        path="/*"
        element={<Navigate to="/login" />}
      /> */}
      </Routes>
    </Container>
  );
}
