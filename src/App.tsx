import React from "react";

import {IEvent, IChoice} from "./events/core";
import PickFacultyEvent from "./events/PickFacultyEvent";
import BoomerGregorEvent from "./events/BoomerGregorEvent";

import PlayerStats from "./trackers/PlayerStats";
import EventTracker from "./trackers/EventTracker";

import Hud from "./components/Hud";
import Choices from "./components/Choices";

import placeholderImg from "./assets/place-holder-image.png";

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
            // TODO: The week number may not be how we choose to track time,
            // we should create some abstraction for this similar to how
            // `playerStats` is done
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
        let currentEvent: IEvent = this.state.currentEvent;
        return (
            <div className="App">
                <Hud
                    playerStats={this.state.playerStats}
                    week={this.state.week}
                />
                <img
                    src={currentEvent.imgPath() === "" ? placeholderImg : currentEvent.imgPath()}
                    alt="Event illustration"
                />
                <h2 id="prompt">{currentEvent.prompt()}</h2>
                <Choices
                    choices={currentEvent.choices()}
                    makeChoice={this.makeChoice}
                />
            </div>
        );
    }
}
