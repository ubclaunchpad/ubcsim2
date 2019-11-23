import React from "react";

interface IProps {
    shouldHide: boolean;
}

export default function GamePlayConsole(props: IProps) {
    return (
        <section id="gameplay-container" className={props.shouldHide ? "hide" : ""}>
            <div 
              id="gameplay-content-box" 
              className="nes-container is-centered"
            >
                <p>Dear, <span id="enter-name" className="nes-pointer">Enter Name</span>
                </p>
                <p>please accept this acceptance letter to UBC.</p>
            </div>
        </section>
    );
}