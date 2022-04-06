import React from 'react';
import PropTypes from 'prop-types';

export default function MissionCard(props) {
  const {
    mission, id, description, index,
  } = props;
  const member = false;
  return (
    <tr
      style={{
        backgroundColor: index % 2 ? 'white' : '#DEE2E6',
      }}
      id={id}
    >
      <td>
        <h3>{mission}</h3>
      </td>
      <td>
        {description}
      </td>
      <td>
        <div
          className="status-container"
          style={{
            backgroundColor: member ? null : 'gray',
          }}
        >
          <h6>
            { member ? 'Active Member' : 'NOT A MEMBER'}
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
MissionCard.propTypes = {
  mission: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
