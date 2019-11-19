import React from "react";

import Scores from "./Scores";
import PlayerStats from "./../trackers/PlayerStats";

interface IProps {
    playerStats: PlayerStats;
}

export default function Hud(props: IProps) {
    return (
        <header>
            <Scores playerStats={props.playerStats}/>
        </header>
    );
}