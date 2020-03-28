import React from "react";

import { IChoice } from "./../../events/core";

interface IProps {
    choice: IChoice;
    acceptOfferEvent: string;
    makeChoice(choice: IChoice): void;
}

export default function ChoiceButton(props: IProps) {

    return (
        <button
            type="button"
            className={"choice-btn-70 nes-btn " + props.choice.btnStyle}
            // tslint:disable-next-line:jsx-no-multiline-js
            onClick={() => {
                if (props.choice.answer === "Accept Offer") document.dispatchEvent(new Event(props.acceptOfferEvent));
                props.makeChoice(props.choice);
            }}
        >
            {props.choice.answer}
        </button>
    );
}