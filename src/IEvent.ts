// import Player from "./Player";

export default interface IEvent {
  displayPrompt(): string;

  displayChoices(): JSX.Element;
  
  displayResponse(): string;
  
  // getInput(): void;

  // updateEvents(player: Player): void;
}
