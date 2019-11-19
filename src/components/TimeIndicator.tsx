import React from "react";

interface IProps {
    week: number;
}

export default function TimeIndicator(props: IProps) {
    return <span>Week: {props.week}</span>;
}