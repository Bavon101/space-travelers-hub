import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinedMission, leftMission } from './redux/missions';

export default function MissionCard(props) {
  const {
    mission, id, description, index, reserved,
  } = props;
  const dispatch = useDispatch();
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
            backgroundColor: reserved ? null : 'gray',
          }}
        >
          <h6>
            { reserved ? 'Active Member' : 'NOT A MEMBER'}
          </h6>
        </div>
      </td>
      <td>
        <button
          type="submit"
          className="mission-btn"
          style={{
            color: reserved ? 'red' : null,
            border: reserved ? '1px solid red' : null,
          }}
          onClick={() => (reserved ? dispatch(leftMission(id)) : dispatch(joinedMission(id)))}
        >
          {reserved ? 'Leave Mission' : 'Join Mission'}
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
  reserved: PropTypes.bool.isRequired,
};
