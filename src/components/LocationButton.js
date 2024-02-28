import React from 'react';

const LocationButton = ({ city, onClick }) => {
  return (
    <button className="btn btn-secondary location-button" onClick={onClick}>
      {city}
    </button>
  );
};

export default LocationButton;
