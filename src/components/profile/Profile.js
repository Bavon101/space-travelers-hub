import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';
import MyRockets from './reservedRocket';

export default function Profile() {
  const missions = useSelector((state) => state.missionsReducer);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);
  const rocketState = useSelector(
    (state) => state.rocketReducer.rockets,
  ).filter((rocket) => rocket.reserved === true);
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
        <MyRockets data={rocketState} />
      </div>
    </div>
  );
}
