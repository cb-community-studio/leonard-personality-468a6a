import React from "react";
import { render, screen } from "@testing-library/react";

import ResponsesPage from "../ResponsesPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders responses page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ResponsesPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("responses-datatable")).toBeInTheDocument();
    expect(screen.getByRole("responses-add-button")).toBeInTheDocument();
});
