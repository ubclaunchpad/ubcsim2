import React from "react";

import { IEvent, IChoice } from "./events/core";

import PlayerStats from "./trackers/PlayerStats";
import EventTracker from "./trackers/EventTracker";
import ChoicesManager from "./events/ChoicesManager";
import EventsManager from "./events/EventsManager";
import events from "./events.json";
import choices from "./choices.json";
import config from "./game-config.json";
import Hud from "./components/hud/Hud";
import GamePlayConsole from "./components/gamePlayConsole/GamePlayConsole";
import Choices from "./components/choices/Choices";

// tslint:disable-next-line:no-empty-interface
export interface IProps { }

export interface IState {
    week: number;
    playerStats: PlayerStats;
    currentEvent: IEvent;
    eventTracker: EventTracker;
}

export default class App extends React.Component<IProps, IState> {
    private name: string;
    private choiceManager: ChoicesManager;
    private eventManager: EventsManager;

    constructor(props: IProps) {
        super(props);

        const playerStats = new PlayerStats();

        //TODO: should we auto allocate a dummy player name or allow user to input their own?
        this.name = "P1";
        this.choiceManager = new ChoicesManager(choices);
        this.eventManager = new EventsManager(events);
        let seasons = [];
        for (const w of config.events.seasonal) {
            seasons.push(w.map(this.eventManager.get.bind(this.eventManager)));
        }
        const eventTracker = new EventTracker(
            config.events.pool.map(this.eventManager.get.bind(this.eventManager)),
            config.events.followUp.map(this.eventManager.get.bind(this.eventManager)),
            seasons
        );
        let firstEvent = eventTracker.getNextEvent(0);
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
        this.state.playerStats.applyStatChanges(choice.statChanges, choice.dlogo);

        if (this.state.week >= 2 && this.state.playerStats.getGpa() < 1.0) {
            // Losing condition
            this.state.eventTracker.queueFollowUpEvent(
                this.eventManager.get("LoseEvent")
            );
        } else if (this.state.week > 5) {
            // Winning condition if not losing
            this.state.eventTracker.queueFollowUpEvent(
                this.eventManager.get("WinEvent")
            );
        } else if (choice.followUp !== ""){
            // The game isn't ending and there is a follow up event
            this.state.eventTracker.queueFollowUpEvent(
                this.eventManager.get(choice.followUp)
            );
        } 

        let nextEvent = this.state.eventTracker.getNextEvent(this.state.week);

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
                                mgr={this.choiceManager}
                                makeChoice={this.makeChoice}
                            />
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
