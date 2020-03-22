import React from "react";

import ScoreItem from "./ScoreItem";
import PlayerStats from "./../../../trackers/PlayerStats";

interface IProps {
    playerStats: PlayerStats;
}

export default function Scores(props: IProps) {
    let playerStats: PlayerStats = props.playerStats;
    let friends: string = playerStats.getFriends().toFixed(0);
    let gpa: string = playerStats.getGpa().toFixed(2);
    let sleep: string = playerStats.getSleep().toFixed(0);
    let scoreChangedAnimation: string[] = playerStats.getScoreAnimation();

    return (
        <div>
            <ScoreItem
                scoreType="Friends"
                scoreValue={friends}
                scoreClass={scoreChangedAnimation[0]}
            />
            <ScoreItem
                scoreType="GPA"
                scoreValue={gpa}
                scoreClass={scoreChangedAnimation[1]}
            />
            <ScoreItem
                scoreType="Sleep"
                scoreValue={sleep}
                scoreClass={scoreChangedAnimation[2]}
            />
        </div>
    );
}