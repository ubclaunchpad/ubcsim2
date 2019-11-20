import React from "react";

import ScoreItem from "./ScoreItem";
import PlayerStats from "./../trackers/PlayerStats";

interface IProps {
    playerStats: PlayerStats;
}

export default function Scores(props: IProps) {
    let playerStats: PlayerStats = props.playerStats;
    return (
        <div>
            <ScoreItem
                scoreType="Friends"
                scoreValue={String(playerStats.getFriends())}
            />
            <ScoreItem
                scoreType="GPA"
                scoreValue={String(playerStats.getGpa())}
            />
            <ScoreItem
                scoreType="Sleep"
                scoreValue={String(playerStats.getSleep())}
            />
        </div>
    );
}