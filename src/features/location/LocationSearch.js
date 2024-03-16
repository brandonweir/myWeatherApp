import React, { useState } from "react";

const LocationSearch = ({ fetchWeather }) => {
    const [locationInput, setLocationInput] = useState("");

    const handleSearch = () => {
        fetchWeather(locationInput);
        setLocationInput(""); // Clear the input after search
    };

    return (
        <div className="location-search">
            <input
                type="text"
                className="form-control"
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                placeholder="Enter location"
            />
            <button className="btn btn-primary" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default LocationSearch;
