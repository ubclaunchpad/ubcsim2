import React from "react";
import App from "../../App";

interface IProps {
    week: number;
}

export default function ProgressBar(props: IProps) {
    return <progress id="progress-bar" className="nes-progress is-success float-right" value={props.week} max={App.maxWeeks} />;
}
