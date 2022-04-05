import React from 'react';
import { Link } from 'react-router-dom';
import Vr from '../Vr';

export default function HeaderLinks() {
  return (
    <div className="links">
      <Link to="/rockets" className="link">Rockets</Link>
      <Link to="/missions" className="link">Missions</Link>
      <Vr />
      <Link to="/profile" className="link">My Profile</Link>
    </div>
  );
}
