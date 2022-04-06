import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './rockets.css';
import { reserveRocket } from './redux/rockets';

const RocketCard = (props) => {
  const dispatch = useDispatch();
  const {
    rocketName, description, flickrImages, reserved, id,
  } = props;

  const handleRocketReserve = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };

  const reserveButtons = !reserved ? (
    <button type="button" className="rocket-button" onClick={() => handleRocketReserve(id)}>
      Reserve Rocket
    </button>
  )
    : (
      <button
        type="button"
        id={id}
        className="rocket-cancel"
      >
        Cancel Reservation
      </button>
    );

  return (
    <div className="rocket-card">
      <img src={flickrImages} width={200} height={200} alt={rocketName} />
      <div className="rocket-card-content">
        <h1>
          {' '}
          {rocketName}
        </h1>
        <p>{description}</p>
        <div>
          { reserveButtons }
        </div>
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketCard;
