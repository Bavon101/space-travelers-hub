import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import HomePage from './components/pages/HomePage';
import MissionsPage from './components/missions/MissionsPage';
import Profile from './components/profile/Profile.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/missions"
          element={<MissionsPage />}
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
