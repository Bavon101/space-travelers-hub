import React from 'react';
import logoImage from '../../images/planet.png';
import './rockets.css';

export default function RocketCard() {
  return (
    <div className="rocket-card">
      <img src={logoImage} width={70} height={70} alt="planet-logo" />
      <div className="rocket-card-content">
        <h1> Falcon 1 </h1>
        <p>
          September 2008, Falcon 1 became the first privately-developed
          liquid-fuel launch vehicle to go into orbit around the Earth.
          Reserve Rocket 1 was the first privately-developed liquid-fuel rocket to
          be launched into orbit.
        </p>
        <button type="button" className="rocket-button">Reserve Rocket</button>
      </div>
    </div>
  );
}
