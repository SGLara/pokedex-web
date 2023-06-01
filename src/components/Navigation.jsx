import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegionList from '../pages/RegionList';
import MyTeams from '../pages/MyTeams';
import Navbar from './Navbar';
import CreateTeamForm from '../pages/CreateTeamForm';

export default function Navigation() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<RegionList />} />
        <Route exact path="/my-teams" element={<MyTeams />} />
        <Route exact path="/my-teams/create" element={<CreateTeamForm />} />
      </Routes>

      <Navbar />
    </>
  );
}
