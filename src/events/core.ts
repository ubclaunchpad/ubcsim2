export interface IEvent {
    prompt(): string;
    imgPath(): string;
    choices(): IChoice[];
    shouldGpcHidden(): boolean;
    hasBottomBoxBorder(): boolean;
}

export interface IChoice {
    answer(): string;
    followUps(): IEvent[];
    statChanges(): StatChanges;
}

export class StatChanges {
    public readonly dfriends: number;
    public readonly dgpa: number;
    public readonly dsleep: number;
    public readonly dlogo?: string;

    constructor(fds: number, gpa: number, sleep: number, logo?: string) {
        this.dfriends = fds;
        this.dgpa = gpa;
        this.dsleep = sleep;
        this.dlogo = logo;
    }
}
