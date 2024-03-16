import React, { useState, useEffect } from "react";
import LocationSearch from "../features/location/LocationSearch";
import WeatherCard from "../features/display/WeatherCard";
import FavoritesList from "../features/favorites/FavoritesList";
import { FetchWeather } from "../utils/api/api";
import useGeolocation from "../utils/hooks/useGeolocation";
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../features/favorites/favoritesSlice'; // adjust the path as necessary

const WeatherApp = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const [weather, setWeather] = useState(null);
    const coords = useGeolocation();

    const fetchWeather = async (location = "", lat = "", lon = "") => {
        const data = await FetchWeather(location, lat, lon);
        if (data) {
            setWeather(data);
        }
    };

    useEffect(() => {
        if (coords) {
            fetchWeather("", coords.latitude, coords.longitude);
        }
    }, [coords]);

    const handleAddFavorite = (location) => {
        if (!favorites.includes(location)) {
            dispatch(addFavorite(location));
        }
    };

    const sortedFavorites = [...favorites].sort();

    return (
        <div>
            <LocationSearch fetchWeather={fetchWeather} />
            {weather && (
                <WeatherCard weather={weather} onAddToFavorites={handleAddFavorite} />
            )}
            <h2>Favorites List</h2>
            <FavoritesList
                favorites={sortedFavorites}
                onSelectFavorite={(city) => fetchWeather(city)}
            />
        </div>
    );
};

export default WeatherApp;