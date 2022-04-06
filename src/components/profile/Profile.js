import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

export default function Profile() {
  const missions = useSelector((state) => state.missionsReducer);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);
  return (
    <div className="profile-container">
      <div className="profile-missions">
        <h1 className="profile-container-title">My Missions</h1>
        <ul className="profile-items">
          {
            joinedMissions.length > 0
              ? joinedMissions.map((mission) => (
                <li key={mission.id} className="profile-item">
                  {mission.mission}
                </li>
              )) : (
                <li className="profile-item">
                  No missions joined yet
                </li>
              )
          }
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
