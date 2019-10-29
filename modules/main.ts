interface IEvent {
    displayPrompt(): void;

    getInput(): void;

    displayResponse(): void;

    updateEvents(state: State): void;
}

const DEFAULT_SLEEP = 100;

class State {
    public pool: IEvent[];
    public queue: IEvent[];  // Queue<IEvent>
    public friends: number;
    public gpa: number;
    public sleep: number;
    public week: number;

    constructor(friends: number, gpa: number) {
        this.pool = [];
        this.queue = [];
        this.friends = friends;
        this.gpa = gpa;
        this.sleep = DEFAULT_SLEEP;
        this.week = 0;
    }

    public getRandomEvent(): IEvent {
        if (this.queue.length !== 0) {
            return this.queue.shift();
        }
        return this.pool[Math.floor(Math.random() * this.pool.length)];
    }
}
