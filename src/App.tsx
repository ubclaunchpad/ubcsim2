import React from "react";

import {IEvent, IChoice} from "./events/core";
import PickFacultyEvent from "./events/PickFacultyEvent";
import BoomerGregorEvent from "./events/BoomerGregorEvent";

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
            [new BoomerGregorEvent()],
            [new PickFacultyEvent()]
        );
        let firstEvent = eventTracker.getNextEvent();

        this.state = {
            week: 1,
            playerStats: playerStats,
            currentEvent: firstEvent,
            eventTracker: eventTracker
        };
    }

    makeChoice = (choice: IChoice) => {
        this.state.playerStats.applyStatChanges(choice.statChanges());

        for (let followUp of choice.followUps()) {
            this.state.eventTracker.queueFollowUpEvent(followUp);
        }

        let nextEvent = this.state.eventTracker.getNextEvent();

        this.setState(prevState => {
            return {
                week: prevState.week + 1,
                playerStats: prevState.playerStats,
                currentEvent: nextEvent,
                eventTracker: prevState.eventTracker
            };
        });
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
