import React from "react";

interface IProps {
    name: string;
}

export default function NameIndicator(props: IProps) {
    return <span id="name" className="this-align-left column float-left this-margin-bottom-5">Name: {props.name}</span>;
}
