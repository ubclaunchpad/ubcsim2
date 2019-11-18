import React from "react";

import ChoiceButton from "./ChoiceButton";
import {IChoice} from "./../events/core";

interface IProps {
    choices: IChoice[];
    makeChoice(choice: IChoice): void;
}

export default function Choices(props: IProps) {
    const choiceButtons = props.choices.map(choice =>
        (
            <ChoiceButton
                key={choice.answer()}
                choice={choice}
                makeChoice={props.makeChoice}
            />
        )
    );

    return (
        <div className="Choices">
            {choiceButtons}
        </div>
    );
}
