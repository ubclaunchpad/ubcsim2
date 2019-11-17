import React from "react";

import {IEvent, IChoice} from "./events/core";
import Player from "./Player";
import Choices from "./components/Choices";

// // tslint:disable-next-line:no-empty-interface
export interface IProps {}

export interface IState {
    player: Player;
    event: IEvent;
}

export default class App extends React.Component <IProps, IState> {

    constructor(props: IProps) {
        super(props);
        const p = new Player();
        this.state = {
            player: p,
            event: p.getRandomEvent(),
        };
    }

    makeChoice(choice: IChoice) {
        console.log(choice.answer());
    }

    render() {
        return (
            <div className="App">
                <h2 id="prompt">{this.state.event.prompt()}</h2>
                <Choices
                    choices={this.state.event.choices()}
                    makeChoice={this.makeChoice}
                />
            </div>
        );
    }
}
