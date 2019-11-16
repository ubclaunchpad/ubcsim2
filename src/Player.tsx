import IEvent from "./IEvent";
import ShittyEvent from "./ShittyEvent";

const DEFAULT_SLEEP = 100;

export default class Player {
    public pool: IEvent[];
    public queue: IEvent[];
    public friends: number;
    public gpa: number;
    public sleep: number;
    public week: number;

    constructor(friends: number, gpa: number) {
        this.pool = [];
        this.queue = [
            new ShittyEvent(
              "This is a shitty event", 
              "click here to conitnue", 
              "I'm really phoning it in on these examples"
            ),
            new ShittyEvent(
              "This is shitty envent number 2", 
              "click her to break everything", 
              "yeaaaa boiiii"
            ),
        ];
        this.friends = friends;
        this.gpa = gpa;
        this.sleep = DEFAULT_SLEEP;
        this.week = 0;
    }

    public getRandomEvent(): IEvent | undefined {
      return this.queue.length > 0 
        ? this.queue.shift() 
        :  this.pool[Math.floor(Math.random() * this.pool.length)];
    }
}
