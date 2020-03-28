// import Blank from "../assets/Blank.png";

const FRIENDS_MIN = 0;
const GPA_MAX = 4;
const GPA_MIN = 0;
const SLEEP_MAX = 100;
const SLEEP_MIN = 0;

export default class PlayerStats {
    private friends: number;
    private gpa: number;
    private sleep: number;
    private logo: string[];
    private scoreChangedAnimation: string[];

    constructor() {
        this.friends = 0;
        this.gpa = 0;
        this.sleep = 0;
        //logo[1]: background color; logo[2]: text color; 
        this.logo = ["FACULTY ICON", "#FFFFFF", "#000000"];
        this.scoreChangedAnimation = [];
    }

    public applyStatChanges(statChanges: number[], dlogo?: string[]) {
        let friends: number = this.friends + statChanges[0];
        this.friends = friends >= FRIENDS_MIN ? friends : 0;

        let gpa: number = this.gpa + statChanges[1];
        if (gpa > GPA_MAX)
            this.gpa = GPA_MAX;
        else if (gpa < GPA_MIN)
            this.gpa = GPA_MIN;
        else
            this.gpa = gpa;

        let sleep: number = this.sleep + statChanges[2];
        if (sleep > SLEEP_MAX)
            this.sleep = SLEEP_MAX;
        else if (sleep < SLEEP_MIN)
            this.sleep = SLEEP_MIN;
        else
            this.sleep = sleep;

        if (dlogo) this.logo = dlogo;

        this.scoreChangedAnimation = [];
        statChanges.forEach((s) => {
            if (s < 0) {
                this.scoreChangedAnimation.push("redIn");
            } else if (s > 0) {
                this.scoreChangedAnimation.push("greenIn");
            } else {
                this.scoreChangedAnimation.push("");
            }
        });
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

    public getLogoText(): string {
      return this.logo[0];
    }

    public getLogoBackground(): string {
      return this.logo[1];
    }

    public getLogoTextColor(): string {
      return this.logo[2];
    }

    public getScoreAnimation(): string[] {
        return this.scoreChangedAnimation;
    }
}
