import { IEvent }from "./events/core";
import FacultyPicker from "./events/FacultyPicker";

export default class Player {
    public pool: IEvent[];
    public queue: IEvent[];
    public friends: number;
    public gpa: number;
    public sleep: number;
    public week: number;

    constructor() {
        this.pool = [];
        this.queue = [new FacultyPicker()];
        this.friends = 0;
        this.gpa = 0;
        this.sleep = 0;
        this.week = 0;
    }

    public getRandomEvent(): IEvent {
        return this.queue.length > 0 
            ? this.queue.shift() as IEvent
            : this.pool[Math.floor(Math.random() * this.pool.length)];
    }
}
