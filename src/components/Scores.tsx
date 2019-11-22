import React from "react";

import ScoreItem from "./ScoreItem";
import PlayerStats from "./../trackers/PlayerStats";

interface IProps {
    playerStats: PlayerStats;
}

export default function Scores(props: IProps) {
    let playerStats: PlayerStats = props.playerStats;
    let friends: string = playerStats.getFriends().toFixed(0);
    let gpa: string = playerStats.getGpa().toFixed(2);
    let sleep: string = playerStats.getSleep().toFixed(0);
    return (
        <div>
            <ScoreItem
                scoreType="Friends"
                scoreValue={friends}
            />
            <ScoreItem
                scoreType="GPA"
                scoreValue={gpa}
            />
            <ScoreItem
                scoreType="Sleep"
                scoreValue={sleep}
            />
        </div>
    );
}