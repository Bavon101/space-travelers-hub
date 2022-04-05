import React from 'react';
import PropTypes from 'prop-types';

export default function MissionCard(props) {
  const { mission, id, description } = props;
  return (
    <tr>
      <td>
        {mission}
      </td>
      <td>
        {description}
      </td>
      <td>
        <div className="status-container">
          <h6>
            {id}
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
};
