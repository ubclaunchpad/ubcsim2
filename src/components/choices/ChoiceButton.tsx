import React from "react";

import { IChoice } from "./../../events/core";

interface IProps {
    choice: IChoice;
    acceptOfferLabel: string;
    makeChoice(choice: IChoice): void;
}

export default function ChoiceButton(props: IProps) {

    return (
        <button
            id={props.choice.answer === "Accept Offer" ? props.acceptOfferLabel : ""}
            type="button"
            className={"choice-btn-70 nes-btn " + props.choice.btnStyle}
            // tslint:disable-next-line:jsx-no-multiline-js
            onClick={() => {
                if (props.choice.answer === "Accept Offer") document.dispatchEvent(new Event(props.acceptOfferLabel));
                props.makeChoice(props.choice);
            }}
        >
            {props.choice.answer}
        </button>
    );
}