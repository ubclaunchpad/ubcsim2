import "@testing-library/jest-dom/extend-expect";
import React from "react";
import {render} from "@testing-library/react";
import GamePlayConsole from "./GamePlayConsole";
import { GamePlayMode } from "../../events/core";

it("renders acceptance letter when asked to", () => {
    const {getByText} = render(
        <GamePlayConsole
            mode={GamePlayMode.AcceptanceLetter}
            imgPath="something.png"
        />
    );

    expect(getByText("Congratulations! Please accept this offer of admission to UBC.")).toBeInTheDocument();
    {/* expect(getByText("Please accept this offer")).toBeInTheDocument(); */}
});

it("renders comic when asked to", () => {
    const {getByText} = render(
        <GamePlayConsole
            mode={GamePlayMode.Comics}
            imgPath="Gregor.png"
        />
    );
});
