import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMissions from '../../api/data_fetch';
import MissionCard from './MissionCard';
import './missions.css';

export default function MissionsPage() {
  const missions = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, []);
  if (missions.length === 0) {
    return (<h3 className="no-missions-text">No missions</h3>);
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>

          </tr>
        </thead>
        <tbody>
          {
            missions.map((mission, index) => (
              <MissionCard
                key={mission.id}
                mission={mission.mission}
                id={mission.id}
                description={mission.description}
                index={index}
                reserved={mission.reserved}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
