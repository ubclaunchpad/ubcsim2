import React from "react";

interface IProps {
    week: number;
}

export default function TimeIndicator(props: IProps) {
    return <span id="progress-bar-title" className="this-align-right column float-right this-margin-bottom-5">Week: {props.week}</span>;
}