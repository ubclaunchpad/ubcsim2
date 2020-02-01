import React from "react";
import {render} from '@testing-library/react';
import App from "../src/App";

// sample test
it("renders without crashing", () => {
    render(<App />);
});
