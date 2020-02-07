import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

const unityContent1 = new UnityContent(
    "buildplacething/Build/buildplacething.json",
    "buildplacething/Build/UnityLoader.js"
)

const unityContent2 = new UnityContent(
    "unity_builds/Build/unity_builds.json",
    "unity_builds/Build/UnityLoader.js"
)

export default class App extends React.Component {

    render() {
        return (
            <div>
                <h1>HELLO WORLD</h1>
                <Unity unityContent={unityContent1} />
            </div>
        );
    }
}
