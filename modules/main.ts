interface IEvent {
    displayPrompt(): string;

    displayChoices(): string;

    // getInput(): void;

    // displayResponse(): void;

    // updateEvents(state: State): void;
}

class ShittyEvent implements IEvent {
    private prompt: string;
    private click: string;
    private display: string;
    constructor(prompt: string, click: string, display: string) {
        this.prompt = prompt;
        this.click = click;
        this.display = display;
    }

    public displayPrompt(): string {
        return this.prompt;
    }

    public displayChoices(): string {
        return "<button onclick='displayResponse()'>" + this.click + "</button>";
    }

}

const DEFAULT_SLEEP = 100;
const SAUDER_FRIENDS = 100;
const SAUDER_GPA = 2.0;
const SCIENCE_FRIENDS = 50;
const SCIENCE_GPA = 3.0;
const ARTS_FRIENDS = 50;
const ARTS_GPA = 2.0;
const ENG_FRIENDS = 0;
const ENG_GPA = 4.0;

class State {
    public pool: IEvent[];
    public queue: IEvent[];  // Queue<IEvent>
    public friends: number;
    public gpa: number;
    public sleep: number;
    public week: number;

    constructor(friends: number, gpa: number) {
        this.pool = [];
        this.queue = [ new ShittyEvent("This is a shitty event", "click here to conitnue", "I'm really phoning it in on these examples")];
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
