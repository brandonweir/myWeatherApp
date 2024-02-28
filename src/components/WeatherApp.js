import React, { useState, useEffect } from 'react';
import LocationSearch from './LocationSearch';
import WeatherCard from './WeatherCard';
import FavoritesList from './FavoritesList'; // Ensure this is imported if you're using it
import useGeolocation from './useGeolocation';

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const coords = useGeolocation();

  const fetchWeather = async (location = '', lat = '', lon = '') => {
    const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
    let url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=imperial`;

    if (location) {
      url += `&q=${location}`;
    } else if (lat && lon) {
      url += `&lat=${lat}&lon=${lon}`;
    } else {
      console.error('No location or coordinates provided');
      return;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      if(data.cod === 200) {
        setWeather(data);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
    }
  };

  useEffect(() => {
    if (coords) {
      fetchWeather('', coords.latitude, coords.longitude);
    }
  }, [coords]);

  const addFavorite = (location) => {
    if (!favorites.includes(location)) {
      setFavorites((prevFavorites) => [...prevFavorites, location]);
    }
  };

  return (
    <div>
      <LocationSearch fetchWeather={fetchWeather} addFavorite={addFavorite} />
      {weather && <WeatherCard weather={weather} />}
      <FavoritesList favorites={favorites} onSelectFavorite={(city) => fetchWeather(city)} />
    </div>
  );
};

export default WeatherApp;
