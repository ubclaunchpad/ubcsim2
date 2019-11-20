import {StatChanges} from "./../events/core";

const FRIENDS_MIN = 0;
const GPA_MAX = 4;
const GPA_MIN = 0;
const SLEEP_MAX = 100;
const SLEEP_MIN = 0;

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
        let friends: number = this.friends + statChanges.dfriends;
        this.friends = friends >= FRIENDS_MIN ? friends : 0;

        let gpa: number = this.gpa + statChanges.dgpa;
        if (gpa > GPA_MAX)
            this.gpa = GPA_MAX;
        else if (gpa < GPA_MIN)
            this.gpa = GPA_MIN;
        else
            this.gpa = gpa;

        let sleep: number = this.sleep + statChanges.dsleep;
        if (sleep > SLEEP_MAX)
            this.sleep = SLEEP_MAX;
        else if (sleep < SLEEP_MIN)
            this.sleep = SLEEP_MIN;
        else
            this.sleep = sleep;
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
