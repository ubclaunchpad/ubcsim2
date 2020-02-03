import "@testing-library/jest-dom/extend-expect";
import React from "react";
import {render} from "@testing-library/react";
import Choices from "./Choices";
import BoomerGregorEvent from "../../events/BoomerGregorEvent";

it("renders choices correctly", () => {
    const choices = new BoomerGregorEvent().choices();
    const {getByText} = render(
        <Choices
            choices={choices}
            makeChoice={(c) => {c}}
        />);
    for (const c of choices) {
        expect(getByText(c.answer())).toBeInTheDocument();
    }
});
