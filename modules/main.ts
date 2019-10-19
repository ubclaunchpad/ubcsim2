interface IEvent {
  displayPrompt(): void;
  getInput(): void;
  displayResponse(): void;
  updateEvents(state: State): void;
}

class State {
  public set: Set<IEvent>;
  public queue: Array<IEvent>;  // Queue<IEvent>
  public friends: number;
  public gpa: number;
  public sleep: number;
}
