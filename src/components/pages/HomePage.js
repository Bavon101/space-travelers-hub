import React from 'react';
import { useSelector } from 'react-redux';
import RocketCard from '../rockets/rockets';

const HomePage = () => {
  const data = useSelector((state) => state.rocketReducer.rockets);
  if (data.length === 0) {
    return (
      <div>
        <ul>
          <li>
            <h1>No rockets available</h1>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <ul>
      {data.map(({
        id, rocketName, description, flickrImages, reserved,
      }) => (
        <RocketCard
          key={id}
          rocketName={rocketName}
          description={description}
          flickrImages={flickrImages}
          reserved={reserved}
          id={id}
        />
      ))}
    </ul>
  );
};

export default HomePage;
