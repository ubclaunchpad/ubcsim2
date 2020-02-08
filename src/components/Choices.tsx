import React from "react";

import ChoiceButton from "./ChoiceButton";
import { IChoice } from "../events/core";
import ChoicesManager from "../events/ChoicesManager";

interface IProps {
    choices: string[];
    mgr: ChoicesManager;
    makeChoice(choice: IChoice): void;
}

export default function Choices(props: IProps) {
    const choiceButtons = props.choices && props.choices.map((choice: string) => {
    const c = props.mgr.get(choice);
    return (
        <ChoiceButton
            key={c.answer}
            choice={c}
            makeChoice={props.makeChoice}
        />
    );
  });

    return (
        <div className="Choices">
            {choiceButtons}
        </div>
    );
}
