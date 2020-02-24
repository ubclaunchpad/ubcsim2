import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

// const unityContent1 = new UnityContent(
//     "buildplacething/Build/buildplacething.json",
//     "buildplacething/Build/UnityLoader.js"
// )

// const unityContent2 = new UnityContent(
//     "unity_builds/Build/unity_builds.json",
//     "unity_builds/Build/UnityLoader.js"
// )

const eventContent = new UnityContent(
    "eventishere/Build/eventishere.json",
    "eventishere/Build/UnityLoader.js"
)

export interface IProps {}

interface IState {
    current_i: boolean;
}

export default class App extends React.Component <IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {current_i: true};

        eventContent.on("DoSomething", () => {
            console.log("UNITY TALKIN");
            console.log("YEAH");
        });
    }

    changeGame = () => {
        this.setState(prevState => {
            return {
                current_i: prevState.current_i ? false : true
            };
        });
    }

    render() {
        if (this.state.current_i) console.log("RENDERING - current_i: true");
        else console.log("RENDERING - current_i: false");
        return (
            <div>
                <h1>HELLO WORLD</h1>
                <button
                    onClick={() => this.changeGame()}
                >
                    {"Click me!"}
                </button>
                {/* <Unity unityContent={this.state.current_i ? unityContent2 : unityContent1} /> */}
                <h1>{this.state.current_i ? "TRUE" : "FALSE"}</h1>
                {this.state.current_i ? <Unity unityContent={eventContent} /> : null}
            </div>
        );
    }
}
