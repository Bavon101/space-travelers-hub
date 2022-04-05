import React from 'react';

export default function MissionCard() {
  return (
    <tr>
      <td>
        Thaicom
      </td>
      <td>
        The Missions section displays a list of current missions along with their brief
        description and participation status.
        There is also a button next to each mission that allows users to join the
        selected mission or leave the mission the user joined earlier.
      </td>
      <td>
        <div className="status-container">
          <h6>
            not a member
          </h6>
        </div>
      </td>
      <td>
        <button type="button" className="mission-btn">
          Join Mission
        </button>
      </td>
    </tr>
  );
}
