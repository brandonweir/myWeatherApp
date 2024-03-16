import React from "react";

const WeatherCard = ({ weather, onAddToFavorites }) => {
    if (!weather) return <p>Loading...</p>;

    return (
        <div className="weather-card">
            <h2>{weather.name}</h2>
            <p>Temperature: {weather.main.temp}°F</p>
            <p>Condition: {weather.weather[0].description}</p>
            <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt="Weather icon"
            />
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind: {weather.wind.speed} mph</p>
            <button onClick={() => onAddToFavorites(weather.name)}>
                Add to Favorites
            </button>
        </div>
    );
};

export default WeatherCard;
