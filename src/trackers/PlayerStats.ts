import {StatChanges} from "./../events/core";

export default class PlayerStats {
    private friends: number;
    private gpa: number;
    private sleep: number;
    private week: number;

    constructor() {
        this.friends = 0;
        this.gpa = 0;
        this.sleep = 0;
        this.week = 0;
    }

    public applyStatChanges(statChanges: StatChanges) {
        this.friends += statChanges.dfriends;
        this.gpa += statChanges.dgpa;
        this.sleep += statChanges.dsleep;
        this.week += 1;
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
    
    public getWeek(): number {
      return this.week;
    }
}
