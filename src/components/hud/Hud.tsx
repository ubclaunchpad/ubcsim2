import React from "react";

import Scores from "./scores/Scores";
import NameIndicator from "./NameIndicator";
import TimeIndicator from "./TimeIndicator";
import PlayerStats from "./../../trackers/PlayerStats";

interface IProps {
    playerStats: PlayerStats;
    week: number;
    name: string;
}

export default function Hud(props: IProps) {

    return (
        <header id="player-stat-box" className="row">
            <div className="row">
                <NameIndicator name={props.name} />
                <TimeIndicator week={props.week} />
            </div>
            <div className="row">
                <span className="column this-align-left">
                    <span className="fit-content-width margin-right-10 float-left">
                        <img className="nes-avatar is-large" src={props.playerStats.getLogo()} alt="Blank Faculty Logo" style={{ imageRendering: "pixelated" }} />
                    </span>
                    <span className="fit-content-width">
                        <Scores playerStats={props.playerStats} />
                    </span>
                </span>
                <span className="column">
                    {/* TODO: need to discuss how process should be defined  */}
                    {/* and make the progress bar meaningful. */}
                    <progress
                        id="progress-bar"
                        className="nes-progress is-success float-right"
                        value="5"
                        max="10"
                    />
                </span>
            </div>
        </header>
    );
}