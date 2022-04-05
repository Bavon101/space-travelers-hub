import React from 'react';
import logoImage from '../images/planet.png';

export default function Logo() {
  return (
    <div className="logo">
      <img src={logoImage} width={70} height={70} alt="planet-logo" />
      <h1>
        Space Traveler&apos; s Hub
      </h1>
    </div>
  );
}
