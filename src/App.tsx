import React from "react";

import { IEvent, IChoice, IMinigame } from "./events/core";

import PlayerStats from "./trackers/PlayerStats";
import EventTracker from "./trackers/EventTracker";
import ChoicesManager from "./events/ChoicesManager";
import EventsManager from "./events/EventsManager";
import MinigamesManager from "./events/MinigamesManager";
import events from "./events.json";
import choices from "./choices.json";
import config from "./game-config.json";
import minigames from "./minigames.json";
import Hud from "./components/hud/Hud";
import GamePlayConsole from "./components/gamePlayConsole/GamePlayConsole";
import Choices from "./components/choices/Choices";
import { GamePlayMode } from "./events/core";

// tslint:disable-next-line:no-empty-interface
export interface IProps { }

export interface IState {
    week: number;
    playerStats: PlayerStats;
    currentEvent: IEvent;
    eventTracker: EventTracker;
    currentMinigame: IMinigame;
}

const emptyMinigame: IMinigame = {
    "build": "",
    "winStatChanges": [0, 0, 0],
    "loseStatChanges": [0, 0, 0],
    "prompt": ""
};

export default class App extends React.Component<IProps, IState> {
    private name: string;
    private choiceManager: ChoicesManager;
    private eventManager: EventsManager;
    private minigameManager: MinigamesManager;

    constructor(props: IProps) {
        super(props);

        const playerStats = new PlayerStats();
        const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

        //TODO: should we auto allocate a dummy player name or allow user to input their own?
        this.name = "P1";
        this.choiceManager = new ChoicesManager(choices);
        this.eventManager = new EventsManager(events);
        let seasons = [];
        for (const w of config.events.seasonal) {
            seasons.push(w.map(this.eventManager.get.bind(this.eventManager)));
        }
        let eventTracker = new EventTracker(
            config.events.pool.map(this.eventManager.get.bind(this.eventManager)),
            config.events.followUp.map(this.eventManager.get.bind(this.eventManager)),
            seasons
        );
        if (isMobile) {
            eventTracker.removeMobiles(this.choiceManager);
        }
        let firstEvent = eventTracker.getNextEvent(0);
        this.minigameManager = new MinigamesManager(minigames);
        this.state = {
            // TODO: The week number may not be how we choose to track time,
            // we should create some abstraction for this similar to how
            // `playerStats` is done
            // also consider Progress bar
            week: 0,
            playerStats: playerStats,
            currentEvent: firstEvent,
            eventTracker: eventTracker,
            currentMinigame: emptyMinigame
        };
    }

    makeChoice = (choice: IChoice) => {
        if (choice.minigame === "") {
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
            } else if (choice.followUp !== "") {
                // The game isn't ending and there is a follow up event
                this.state.eventTracker.queueFollowUpEvent(
                    this.eventManager.get(choice.followUp)
                );
            }

            let nextEvent = this.state.eventTracker.getNextEvent(this.state.week + 1);

            this.setState(prevState => {
                return {
                    week: prevState.week + 1,
                    playerStats: prevState.playerStats,
                    currentEvent: nextEvent,
                    eventTracker: prevState.eventTracker,
                    currentMinigame: emptyMinigame
                };
            });
        }
        else {
            let minigame = this.minigameManager.get(choice.minigame);
            let minigameEvent = {
                "prompt": minigame.prompt,
                "imgPath": "",
                "choices": [],
                "hasBottomBoxBorder": false,
                "hasInnerFill": false,
                "gamePlayMode": GamePlayMode.Minigame
            };

            this.setState(prevState => {
                return {
                    week: prevState.week,
                    playerStats: prevState.playerStats,
                    currentEvent: minigameEvent,
                    eventTracker: prevState.eventTracker,
                    currentMinigame: minigame
                };
            });
        }
    }

    finishMinigame = (statChanges: number[]) => {
        this.state.playerStats.applyStatChanges(statChanges, "");
        let nextEvent = this.state.eventTracker.getNextEvent(this.state.week + 1);
        this.setState(prevState => {
            return {
                week: prevState.week + 1,
                playerStats: prevState.playerStats,
                currentEvent: nextEvent,
                eventTracker: prevState.eventTracker,
                currentMinigame: emptyMinigame
            };
        });
    }

    render() {
        let currentEvent: IEvent = this.state.currentEvent;

        // some screen resizing things...
        const height = 667;
        const width = 350;
        let scale = (Math.min(
            window.innerHeight / height,
            window.innerWidth / width
        ));
        scale = Math.floor(scale) >= 1 ? Math.floor(scale) : 1;

        let topMargin = (window.innerHeight - 667) / 2;
        topMargin = topMargin > 0 ? topMargin : 0;

        var style = {
            marginTop: topMargin + "px",
            transform: "scale(" + scale + ")",
        };


        return (
            <div id="app" >
                <div id="game-container" style={style} className="nes-container is-ubc-alt-blue has-box-shadow">
                    <Hud
                        playerStats={this.state.playerStats}
                        week={this.state.week}
                        name={this.name}
                    />
                    <GamePlayConsole
                        mode={currentEvent.gamePlayMode}
                        imgPath={currentEvent.imgPath}
                        minigame={this.state.currentMinigame}
                        finishMinigame={this.finishMinigame}
                    />
                    <section
                        id="user-interaction-box"
                        className={currentEvent.hasBottomBoxBorder ? "nes-container" : ""}
                    >
                        <div id="bottom-menu" className="bottom-container" style={currentEvent.hasInnerFill ? {} : { border: "none", background: "none" }}>
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
            </div >
        );
    }
}