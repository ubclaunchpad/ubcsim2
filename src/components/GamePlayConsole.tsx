import React from "react";
import Img from "react-image";
import placeholderImg from "../assets/place-holder-image.png";

interface IProps {
    mode: string;
    imgPath: string;
}

const generateAcceptanceLetter = () => {
    return (
        <div
            id="gameplay-content-box"
            className="nes-container is-centered"
        >
            <p>Dear, <span id="enter-name" className="nes-pointer">Enter Name</span>
            </p>
            <p>Congratulations! <br />Please accept this offer of admission to UBC.</p>
        </div>
    );
};

const generateComic = (img: string) => {
    // img = ".." + img;
    // console.log(img)

    return (
        <Img
            src={img === "" ? placeholderImg : require(`../assets/${img}`)}
            alt="Gameplay comic"
            className="event-illustration"
        />
    );
};

export default function GamePlayConsole(props: IProps) {
    return (
        <section id="gameplay-container" className={props.mode === "Hide" ? "hide" : ""}>
            {props.mode === "AcceptanceLetter" ? generateAcceptanceLetter() : generateComic(props.imgPath)}
        </section >
    );
}
