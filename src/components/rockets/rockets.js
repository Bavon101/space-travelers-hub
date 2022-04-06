import React from 'react';
import PropTypes from 'prop-types';
import './rockets.css';

const RocketCard = (props) => {
  const {
    rocketName, description, images,
  } = props;

  return (
    <div className="rocket-card">
      <img src={images} width={100} height={100} alt="planet-logo" />
      <div className="rocket-card-content">
        <h1>
          {' '}
          {rocketName}
        </h1>
        <p>{description}</p>
        <button type="button" className="rocket-button">Reserve Rocket</button>
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
};

export default RocketCard;
