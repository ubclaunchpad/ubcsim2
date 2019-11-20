import React from "react";

import {IEvent, IChoice} from "./events/core";
import PickFacultyEvent from "./events/PickFacultyEvent";
import BoomerGregorEvent from "./events/BoomerGregorEvent";

import PlayerStats from "./trackers/PlayerStats";
import EventTracker from "./trackers/EventTracker";

import img from "./assets/place-holder-image.png";

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
            <div className="game-container">
                <div className="align-items">
                    <section id="player-stat-box" className="row">
                        <div className="row">
                            <span id="name" className="this-align-left column float-left">Name: </span>
                            <span id="progress-bar-title" className="this-align-right column float-right">WEEK: {this.state.playerStats.getWeek()}</span>
                        </div>
                        <div className="row">
                            <span className="column this-align-left">
                                <span className="fit-content-width margin-right-10 float-left">
                                    <div id="faculty-badge" />
                                </span>
                                <span className="fit-content-width">
                                    <div id="gpa" className="stat">GPA: {this.state.playerStats.getGpa()}</div>
                                    <div id="sleep" className="stat">FRIENDS: {this.state.playerStats.getFriends()}</div>
                                    <div id="friends" className="stat">SLEEP: {this.state.playerStats.getSleep()} %</div>
                                </span>
                            </span>
                            <span className="column">
                                <progress id="progress-bar" className="nes-progress is-success float-right" value="5" max="10" />
                            </span>
                        </div>
                    </section>
                    <section id="gameplay-content-box">
                        <img src={img} alt="" />
                    </section>
                    <section id="user-interaction-box">
                        <div id="bottom-menu" className="bottom-container">
                            <p id="prompt" className="this-align-center">
                                {this.state.currentEvent.prompt()}
                            </p>
                            <Choices
                                choices={this.state.currentEvent.choices()}
                                makeChoice={this.makeChoice}
                            />
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
