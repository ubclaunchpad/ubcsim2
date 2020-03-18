export const GamePlayMode = {
    Comics: "Comics",
    AcceptanceLetter: "AcceptanceLetter",
    Hide: "Hide",
    Minigame: "Minigame"
};

export interface IEvent {
    prompt: string;
    imgPath: string;
    choices: string[];
    gamePlayMode: string;
    hasBottomBoxBorder: boolean;
    hasInnerFill: boolean;
}

export interface IChoice {
    answer: string;
    followUp: string;
    statChanges: number[];
    dlogo?: string;
    minigame: string;
}

export interface IMinigame {
    build: string;
    winStatChanges: number[];
    loseStatChanges: number[];
    prompt: string;
}