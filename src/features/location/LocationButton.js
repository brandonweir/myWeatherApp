import React from "react";

const LocationButton = ({ city, onClick }) => {
    return (
        <div>
            <button onClick={onClick}>{city}</button>
        </div>
    );
};

export default LocationButton;
