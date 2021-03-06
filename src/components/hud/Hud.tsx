import React from "react";

import Scores from "./scores/Scores";
import NameIndicator from "./NameIndicator";
import TimeIndicator from "./TimeIndicator";
import ProgressBar from "./ProgressBar";
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
                    <span 
                      id="faculty-badge" 
                      className="fit-content-width margin-right-10 float-left"
                      style={{"background": props.playerStats.getLogoBackground(),  "color": props.playerStats.getLogoTextColor()}}
                    >
                        {props.playerStats.getLogoText()}
                    </span>
                    <span className="fit-content-width">
                        <Scores playerStats={props.playerStats} />
                    </span>
                </span>
                <span className="column">
                    <ProgressBar week={props.week} />
                </span>
            </div>
        </header>
    );
}