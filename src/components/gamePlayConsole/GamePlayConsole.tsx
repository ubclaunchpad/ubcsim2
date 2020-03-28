import React from "react";
import placeholderImg from "./../../assets/place-holder-image.png";
import { GamePlayMode } from "./../../events/core";
import Unity, { UnityContent } from "react-unity-webgl";
import { IMinigame } from "./../../events/core";
import ContentEditable from "react-contenteditable";

interface IProps {
    mode: string;
    imgPath: string;
    minigame: IMinigame;
    acceptOfferEvent: string;
    finishMinigame(statChanges: number[]): void;
    handleNameChange(name: string): void;
}

interface IState {
    name: string;
    editable: boolean; 
}

export default class GamePlayConsole extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
          name: "",
          editable: true 
        };
    }

    handleChange = (evt: any) => {
      this.setState({ name: evt.target.value });
    }

    changeName = () => {
        if(this.state.name !== "" ) this.props.handleNameChange(this.state.name);
    }

    generateAcceptanceLetter = () => {
        document.addEventListener(this.props.acceptOfferEvent, this.changeName);

        return (
            <div
                id="gameplay-content-box"
                className="acceptance-letter"
            >
                <p>Dear <ContentEditable 
                    className="editable nes-pointer underline"
                    tagName="span"
                    html={this.state.name}
                    disabled={!this.state.editable}
                    // tslint:disable-next-line:jsx-alignment
                    onChange={this.handleChange} />
                </p>
                <p>Congratulations! <br />Please accept this offer of admission to UBC.</p><br />
                <p>Survive the school year by balancing your social life, grades, and sleep!</p>
            </div>
        );
    }

    generateComic = () => {
        return (
            <img
                src={this.props.imgPath === "" ? placeholderImg : require(`../../assets/${this.props.imgPath}`)}
                alt="Gameplay comic"
                className="event-illustration"
            />
        );
    }

    generateMiniGame = () => {
        let unityBuildName: string = this.props.minigame.build;
        let unityContent = new UnityContent(
            `unity/${unityBuildName}/Build/${unityBuildName}.json`,
            `unity/${unityBuildName}/Build/UnityLoader.js`,
        );

        unityContent.on("WinMiniGame", () => {
            console.log("HEY WE WON");
            this.props.finishMinigame(this.props.minigame.winStatChanges);
        });

        unityContent.on("LoseMiniGame", () => {
            console.log("HEY WE LOST");
            this.props.finishMinigame(this.props.minigame.loseStatChanges);
        });

        return (
            <div
                style={{width: "inherit", height: "250px", margin: "auto"}}
            >
                <Unity unityContent={unityContent} />
            </div>
        );
    }

    generateConsole = () => {
        if (this.props.mode === GamePlayMode.AcceptanceLetter)
        {
            return this.generateAcceptanceLetter();
        }
        else if (this.props.mode === GamePlayMode.Minigame)
        {
            return this.generateMiniGame();
        }
        else
        {
            return this.generateComic();
        }
    }
    
    render() {
        return (
          <section id="gameplay-container" className={this.props.mode === GamePlayMode.Hide ? "hide" : ""}>
            {this.generateConsole()}
          </section >
        );
    }
}
