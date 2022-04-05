import React from 'react';
import './profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-missions">
        <h1 className="profile-container-title">My Missions</h1>
        <ul className="profile-items">
          <li className="profile-item">
            Telstar
          </li>
          <li className="profile-item">
            SES
          </li>
          <li className="profile-item">
            AsiaSat
          </li>
          <li className="profile-item">
            ABS
          </li>
        </ul>
      </div>
      <div className="profile-rockets">
        <h1 className="profile-container-title">My Rockets</h1>
        <ul className="profile-items">
          <li className="profile-item">
            Falcon 9
          </li>
          <li className="profile-item">
            Falcon Heavy
          </li>
          <li className="profile-item">
            Starship
          </li>
        </ul>
      </div>
    </div>
  );
}
