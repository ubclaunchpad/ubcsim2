import "@testing-library/jest-dom/extend-expect";
import React from "react";
import {render} from "@testing-library/react";
import Choices from "./Choices";
import ChoicesManager from "./../../events/ChoicesManager";
import eventchoices from "./../../choices.json";
import events from "./../../events.json";

it("renders choices correctly", () => {
    const mgr = new ChoicesManager(eventchoices);
    const choices = events.BoomerGregorEvent.choices;
    const {getByText} = render(
        <Choices
            choices={choices}
            mgr={mgr}
            makeChoice={(c) => {c;}}
        />
    );
    for (const c of choices) {
        expect(getByText(mgr.get(c).answer)).toBeInTheDocument();
    }
});
