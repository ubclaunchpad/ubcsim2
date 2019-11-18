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
            <div className="game-container">
                <h2 id="prompt">{this.state.currentEvent.prompt()}</h2>
                <Choices
                    choices={this.state.currentEvent.choices()}
                    makeChoice={this.makeChoice}
                />
                <div className="align-items">
                    <section id="scores-bar" className="row">
                        {/* Right Column */}
                        <div className="row column this-align-left">
                        <div className="column">
                            <span id="name">Name: </span>
                            <div id="faculty" className="faculty-badge" />
                        </div>
                        <div className="column this-display-block">
                            <span id="gpa" className="stat">GPA: </span>
                            <span id="sleep" className="stat">SLEEP: </span>
                            <span id="friends" className="stat">GPA: </span>
                        </div>
                        
                        </div>
                        {/* Left Column */}
                        <div className="column">
                            <span id="progress-bar">WEEK: </span>
                        </div>
                    </section>
                    <section id="gameplay-area">
                        <img src="../public/assets/place-holder-image.png" alt=""/>
                    </section>
                    <section id="bottom">
                        <div id="bottom-menu" className="bottom-container">
                            <p id="prompt" className="this-align-center">
                            You have been invited to a toga party! Are you going to go?
                            </p>
                            <button type="button" className="nes-btn is-primary choice-A">CHOICE A</button>
                            <button type="button" className="nes-btn is-primary choice-b">CHOICE B</button>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
