import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";

// sample test
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should be able to make basic assertions", () => {
  expect("Hello".length).toEqual(5);
});