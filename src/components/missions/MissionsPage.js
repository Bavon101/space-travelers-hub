import React from 'react';
import MissionCard from './MissionCard';

export default function MissionsPage() {
  return (
    <div>
      <table>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>

        </tr>
        <MissionCard />
        <MissionCard />
        <MissionCard />
        <MissionCard />
        <MissionCard />
      </table>
    </div>
  );
}
