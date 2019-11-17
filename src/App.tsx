import React from "react";

import {IEvent, IChoice} from "./events/core";
import FacultyPicker from "./events/FacultyPicker";

import PlayerStats from "./trackers/PlayerStats";
import EventTracker from "./trackers/EventTracker";

import Choices from "./components/Choices";

// // tslint:disable-next-line:no-empty-interface
export interface IProps {}

export interface IState {
    week: number;
    playerStats: PlayerStats;
    currentEvent: IEvent;
    eventTracker: EventTracker;
}

export default class App extends React.Component <IProps, IState> {

    constructor(props: IProps) {
        super(props);

        const playerStats = new PlayerStats();
        const eventTracker = new EventTracker(
            [],
            [new FacultyPicker()]
        );
        let firstEvent = eventTracker.getNextEvent();

        this.state = {
            week: 1,
            playerStats: playerStats,
            currentEvent: firstEvent,
            eventTracker: eventTracker
        };
    }

    makeChoice(choice: IChoice) {
        console.log(choice.answer());
    }

    render() {
        return (
            <div className="App">
                <h2 id="prompt">{this.state.currentEvent.prompt()}</h2>
                <Choices
                    choices={this.state.currentEvent.choices()}
                    makeChoice={this.makeChoice}
                />
            </div>
        );
    }
}
