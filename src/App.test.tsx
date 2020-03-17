import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";

// sample test
describe("simple rendering", () => {
    beforeAll(() => {
        Object.defineProperty(window, "matchMedia", {
            value: jest.fn(() => {
                return {
                    matches: true,
                    addEventListener: jest.fn(),
                    removeEventListener: jest.fn()
                };
            })
        });
    });

    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
