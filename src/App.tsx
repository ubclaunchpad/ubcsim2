import React from "react";

import {IEvent, IChoice} from "./events/core";
import Player from "./Player";

// // tslint:disable-next-line:no-empty-interface
export interface IProps {}

export interface IState {
    player: Player;
    event: IEvent;
}

export default class App extends React.Component <IProps, IState> {

    public SAUDER_FRIENDS: number = 100;
    public SAUDER_GPA: number = 2.0;
    public SCIENCE_FRIENDS: number = 50;
    public SCIENCE_GPA: number = 3.0;
    public ARTS_FRIENDS: number = 50;
    public ARTS_GPA: number = 2.0;
    public ENG_FRIENDS: number = 0;
    public ENG_GPA: number = 4.0;

    constructor(props: IProps) {
        super(props);
        const p = new Player();
        this.state = {
            player: p,
            event: p.getRandomEvent(),
        };
    }

    getNextEvent() {
        let e = this.state.player.getRandomEvent();
        this.setState({ 
            event: e,
        });
    }

    render() {
        const choices = this.state.event.choices().map((c: IChoice) => {
            return <button className="choices-btn" key={c.answer()}>{c.answer()}</button> ;
        });
        return (
            <div className="App">
                <h2 id="prompt">{this.state.event.prompt()}</h2>
                <div id="choices">{choices}</div>
            </div>
        );
    }
}
