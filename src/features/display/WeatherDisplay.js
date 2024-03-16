import React from "react";

const WeatherDisplay = ({ weather }) => {
    if (!weather) return null;

    return (
        <div>
            <h2>Weather in {weather.name}</h2>
            <img
                src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                alt="Weather icon"
            />
            <p>Temperature: {weather.main.temp}°F</p>
            <p>Condition: {weather.weather[0].description}</p>
        </div>
    );
};

export default WeatherDisplay;
