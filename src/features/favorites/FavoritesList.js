import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { removeFavorite } from '../favorites/favoritesSlice';

const FavoritesList = ({ favorites, onSelectFavorite }) => {
    const dispatch = useDispatch();

    const handleRemoveFavorite = (city) => {
        dispatch(removeFavorite(city));
    };

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <table className="favorites-list">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {favorites.map((city, index) => (
                        <tr key={index}>
                            <td>
                                <button onClick={() => onSelectFavorite(city)}>
                                    {city}
                                </button>
                            </td>
                            <td>
                                <FontAwesomeIcon
                                    icon={faTrashCan}
                                    color="red"
                                    onClick={() => {
                                        if (
                                            window.confirm(
                                                "Are you sure you want to remove this favorite?"
                                            )
                                        ) {
                                            handleRemoveFavorite(city);
                                        }
                                    }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FavoritesList;