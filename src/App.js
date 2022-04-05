import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import HomePage from './components/pages/HomePage';
import MissionsPage from './components/missions/MissionsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/missions" element={<MissionsPage />} />
      </Routes>
    </div>
  );
}

export default App;
