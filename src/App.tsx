import React from "react";

import {IEvent, IChoice} from "./events/core";

import PlayerStats from "./trackers/PlayerStats";
import EventTracker from "./trackers/EventTracker";

import Hud from "./components/Hud";
import GamePlayConsole from "./components/GamePlayConsole";
import Choices from "./components/Choices";
import ChoicesManager from "./events/ChoicesManager";
import events from "./events.json";
import choices from "./choices.json";

// tslint:disable-next-line:no-empty-interface
export interface IProps {}

export interface IState {
    week: number;
    playerStats: PlayerStats;
    currentEvent: IEvent;
    eventTracker: EventTracker;
}

export default class App extends React.Component <IProps, IState> {
    private name: string;
	private mgr: ChoicesManager;

    constructor(props: IProps) {
        super(props);

        const playerStats = new PlayerStats();
        const eventTracker = new EventTracker(
            [events.BoomerGregorEvent, events.CuteGirlEvent, events.FratPartyEvent],
            [events.LandingEvent, events.PickFacultyEvent]
        );
        let firstEvent = eventTracker.getNextEvent();

        //TODO: should we auto allocate a dummy player name or allow user to input their own?
        this.name = "P1";
		this.mgr = new ChoicesManager(choices);
        this.state = {
            // TODO: The week number may not be how we choose to track time,
            // we should create some abstraction for this similar to how
            // `playerStats` is done
            // also consider Progress bar
            week: 0,
            playerStats: playerStats,
            currentEvent: firstEvent,
            eventTracker: eventTracker
        };
    }

    makeChoice = (choice: IChoice) => {
        this.state.playerStats.applyStatChanges(choice.statChanges);
        for (let followUp of choice.followUps) {
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
            <div id="app">
                <div id="game-container">
                    <Hud
                      playerStats={this.state.playerStats}
                      week={this.state.week}
                      name={this.name}
                    />
                    <GamePlayConsole 
                      mode={currentEvent.gamePlayMode}
                      imgPath={currentEvent.imgPath}
                    />
                    <section 
                      id="user-interaction-box" 
                      className={currentEvent.hasBottomBoxBorder ? "nes-container is-rounded" : ""}
                    >
                        <div id="bottom-menu" className="bottom-container">
                            <p id="prompt" className="this-align-center">
                                {currentEvent.prompt}
                            </p>
                            <Choices
                                choices={currentEvent.choices}
								mgr={this.mgr}
                                makeChoice={this.makeChoice}
                            />
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
