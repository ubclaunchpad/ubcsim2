import React from "react";

import { IChoice } from "./../../events/core";

interface IProps {
    choice: IChoice;
    makeChoice(choice: IChoice): void;
}

export default function ChoiceButton(props: IProps) {
    return (
        <button type="button"
            className="choice-btn-70 web-work-blue btn btn-animation"
            onClick={() => props.makeChoice(props.choice)}
        >
            {props.choice.answer}
        </button>
    );
}
