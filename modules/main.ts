interface IEvent {
  displayPrompt(): void;
  getInput(): void;
  displayResponse(): void;
  updateEvents(state: State): void;
}

const DEFAULT_SLEEP = 100;

class State {
  public pool: Set<IEvent>;
  public queue: Array<IEvent>;  // Queue<IEvent>
  public friends: number;
  public gpa: number;
  public sleep: number;
  public week: number;
  
  constructor(friends: number, gpa: number) {
    this.pool = new Set;
    this.queue = new Array;
    this.friends = friends;
    this.gpa = gpa;
    this.sleep = DEFAULT_SLEEP;
    this.week = 0;
  }
}
