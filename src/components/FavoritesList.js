import React from 'react';
import LocationButton from './LocationButton';

const FavoritesList = ({ favorites, onSelectFavorite }) => {
  return (
    <div className="favorites-list">
      {favorites.map((city, index) => (
        <LocationButton key={index} city={city} onClick={() => onSelectFavorite(city)} />
      ))}
    </div>
  );
};

export default FavoritesList;
