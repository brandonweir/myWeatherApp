import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        favorites: favoritesReducer,
    },
});