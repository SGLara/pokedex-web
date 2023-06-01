import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegionList from '../pages/RegionList';
import MyTeams from '../pages/MyTeams';
import Navbar from './Navbar';

export default function Navigation() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<RegionList />} />
        <Route exact path="/my-teams" element={<MyTeams />} />
      </Routes>

      <Navbar />
    </>
  );
}
