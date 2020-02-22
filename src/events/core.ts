export const GamePlayMode = {
  "Comics": "Comics",
  "AcceptanceLetter": "AcceptanceLetter",
  "Hide": "Hide"
};

export interface IEvent {
    "prompt": string;
    "imgPath": string;
    "choices": string[];
    "gamePlayMode": string;
    "hasBottomBoxBorder": boolean;
}

export interface IChoice {
    "answer": string;
    "followUp": string;
    "statChanges": number[];
    "dlogo"?: string;
}
