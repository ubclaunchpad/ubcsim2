import React from "react";
import placeholderImg from "./../../assets/place-holder-image.png";
import { GamePlayMode } from "./../../events/core";
import Unity, { UnityContent } from "react-unity-webgl";
import { IMinigame } from "./../../events/core";

interface IProps {
    mode: string;
    imgPath: string;
    minigame: IMinigame;
    finishMinigame(statChanges: number[]): void;
}

const generateAcceptanceLetter = () => {
    return (
        <div
            id="gameplay-content-box"
            className="acceptance-letter"
        >
            <p>Dear, <span id="enter-name" className="nes-pointer">Enter Name</span></p>
            <p>Congratulations! <br />
                Please accept this offer of admission to UBC.</p><br />
            <p>Survive the school year by balancing your social life, grades, and sleep!</p>
        </div>
    );
};

const generateComic = (img: string) => {
    return (
        <img
            src={img === "" ? placeholderImg : require(`../../assets/${img}`)}
            alt="Gameplay comic"
            className="event-illustration"
        />
    );
};

const generateMiniGame = (minigame: IMinigame, finishMinigame: Function) => {
    let unityBuildName: string = minigame.build;
    let unityContent = new UnityContent(
        `unity/${unityBuildName}/Build/${unityBuildName}.json`,
        `unity/${unityBuildName}/Build/UnityLoader.js`,
    );

    unityContent.on("WinMiniGame", () => {
        console.log("HEY WE WON");
        finishMinigame(minigame.winStatChanges);
    });

    unityContent.on("LoseMiniGame", () => {
        console.log("HEY WE LOST");
        finishMinigame(minigame.loseStatChanges);
    });

    return (
        <div
            style={{ width: "inherit", height: "250px", margin: "auto" }}
        >
            <Unity unityContent={unityContent} />
        </div>
    );
};

const generateConsole = (props: IProps) => {
    if (props.mode === GamePlayMode.AcceptanceLetter) {
        return generateAcceptanceLetter();
    }
    else if (props.mode === GamePlayMode.Minigame) {
        return generateMiniGame(props.minigame, props.finishMinigame);
    }
    else {
        return generateComic(props.imgPath);
    }
};

export default function GamePlayConsole(props: IProps) {
    return (
        <section id="gameplay-container" className={props.mode === GamePlayMode.Hide ? "hide" : ""}>
            {generateConsole(props)}
        </section >
    );
}
