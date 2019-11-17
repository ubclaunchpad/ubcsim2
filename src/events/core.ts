export interface IEvent {
    prompt(): string;
    imgPath(): string;
    choices(): IChoice[];
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

    constructor(fds: number, gpa: number, sleep: number) {
        this.dfriends = fds;
        this.dgpa = gpa;
        this.dsleep = sleep;
    }
}
