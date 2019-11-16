import React from "react";

import IEvent from "./IEvent";

export default class ShittyEvent implements IEvent {
    private readonly prompt: string;
    private readonly click: string;
    private readonly display: string;

    constructor(prompt: string, click: string, display: string) {
        this.prompt = prompt;
        this.click = click;
        this.display = display;
    }

    displayPrompt(): string {
        return this.prompt;
    }

    displayChoices(): JSX.Element {
      return <button onClick={this.displayResponse}>{this.click}</button>;
    }

    displayResponse(): string {
        return this.display;
    }

}
