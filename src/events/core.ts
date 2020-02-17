export interface IEvent {
    "prompt": string;
    "imgPath": string;
    "choices": string[];
    "gamePlayMode": string;
    "hasBottomBoxBorder": boolean;
    "shouldGpcHidden"?: boolean;
}

export interface IChoice {
    "answer": string;
    "followUp": string;
    "statChanges": number[];
    "dlogo"?: string;
}
