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
            className="choice-btn-70 is-primary nes-btn"
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
