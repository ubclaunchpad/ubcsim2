import React from "react";

import Scores from "./Scores";
import TimeIndicator from "./TimeIndicator";
import PlayerStats from "./../trackers/PlayerStats";

interface IProps {
    playerStats: PlayerStats;
    week: number;
}

export default function Hud(props: IProps) {
    return (
        <header>
            <Scores playerStats={props.playerStats}/>
            <TimeIndicator week={props.week}/>
        </header>
    );
}