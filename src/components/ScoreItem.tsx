import React from "react";

interface IProps {
    scoreType: string;
    scoreValue: string;
}

export default function ScoreItem(props: IProps) {
    return <span>{props.scoreType}: {props.scoreValue}</span>;
}