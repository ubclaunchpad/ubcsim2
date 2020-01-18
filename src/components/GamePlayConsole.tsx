import React from "react";

import placeholderImg from "../assets/place-holder-image.png";
import { GamePlayMode } from "../events/core";

interface IProps {
    mode: GamePlayMode;
    imgPath: string;
}

const generateAcceptanceLetter = () => {
    return (
        <div
            id="gameplay-content-box"
            className="acceptance-letter is-centered"
        >
            <p>Dear, <span id="enter-name" className="nes-pointer">Enter Name</span>
            </p>
            <p>Congratulations! <br />Please accept this offer of admission to UBC.</p>
        </div>
    );
};

const generateComic = (img: string) => {
    return (
        <img
            src={img === "" ? placeholderImg : img}
            alt="Gameplay comic"
            className="event-illustration"
        />
    );
};

export default function GamePlayConsole(props: IProps) {
    return (
        <section id="gameplay-container" className={props.mode === GamePlayMode.Hide ? "hide" : ""}>
            {props.mode === GamePlayMode.AcceptanceLetter ? generateAcceptanceLetter() : generateComic(props.imgPath)}
        </section >
    );
}