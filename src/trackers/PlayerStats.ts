import {StatChanges} from "./../events/core";

export default class PlayerStats {
    private friends: number;
    private gpa: number;
    private sleep: number;

    constructor() {
        this.friends = 0;
        this.gpa = 0;
        this.sleep = 0;
    }

    public applyStatChanges(statChanges: StatChanges) {
        this.friends += statChanges.dfriends;
        this.gpa += statChanges.dgpa;
        this.sleep += statChanges.dsleep;
    }

    public getFriends(): number {
        return this.friends;
    }

    public getGpa(): number {
        return this.gpa;
    }

    public getSleep(): number {
        return this.sleep;
    }
}
