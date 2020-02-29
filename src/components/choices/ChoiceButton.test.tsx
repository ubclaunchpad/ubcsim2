import "@testing-library/jest-dom/extend-expect";
import React from "react";
import {render} from "@testing-library/react";
import ChoiceButton from "./ChoiceButton";
import choices from "./../../choices.json";

it("renders choices correctly", () => {
    const { getByText } = render(
        <ChoiceButton
            choice={choices.BuyTheTix}
            makeChoice={() => {}}
        />
        );
    expect(getByText(choices.BuyTheTix.answer)).toBeInTheDocument();
});
