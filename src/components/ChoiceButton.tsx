import React from "react";

import {IChoice} from "./../events/core";

interface IProps {
    choice: IChoice;
    makeChoice(choice: IChoice): void;
}

export default function ChoiceButton(props: IProps) {
    return (
        <button
            className="choice-btn-half is-primary nes-btn"
            onClick={() => props.makeChoice(props.choice)}
        >
            {props.choice.answer()}
        </button>
    );
}
