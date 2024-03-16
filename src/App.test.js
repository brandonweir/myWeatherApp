import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

test("renders Weather from the document", async () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    expect(await screen.findByText(/Weather/)).toBeInTheDocument();
});
