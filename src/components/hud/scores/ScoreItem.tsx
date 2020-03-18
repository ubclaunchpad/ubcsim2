import React from "react";

interface IProps {
    scoreType: string;
    scoreValue: string;
    scoreClass: string;
}

export default function ScoreItem(props: IProps) {
  return <span className="stat">{props.scoreType}: <span className={props.scoreClass}>{props.scoreValue}</span></span>;
}