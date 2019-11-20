import React from "react";

interface IProps {
    week: number;
}

export default function TimeIndicator(props: IProps) {
    return <span id="progress-bar-title" className="this-align-right column float-right">Week: {props.week}</span>;
}