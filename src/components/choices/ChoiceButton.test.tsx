import "@testing-library/jest-dom/extend-expect";
import React from "react";
import {render} from "@testing-library/react";
import ChoiceButton from "./ChoiceButton";
import BoomerGregorEvent from "../../events/BoomerGregorEvent";

it("renders choices correctly", () => {
    for (const c of new BoomerGregorEvent().choices()) {
        const { getByText } = render(
            <ChoiceButton
                choice={c}
                makeChoice={() => {}}
            />
        );
        expect(getByText(c.answer())).toBeInTheDocument();
    }
});
