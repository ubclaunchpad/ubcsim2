import React from "react";

import IEvent from "./IEvent";
import Player from "./Player";

// // tslint:disable-next-line:no-empty-interface
export interface IProps {}

export interface IState {
  player: Player | undefined;
  event: IEvent | undefined;
  promptMsg: string;
  choiceElement: JSX.Element;
}

export default class App extends React.Component <IProps, IState> {

  public SAUDER_FRIENDS: number = 100;
  public SAUDER_GPA: number = 2.0;
  public SCIENCE_FRIENDS: number = 50;
  public SCIENCE_GPA: number = 3.0;
  public ARTS_FRIENDS: number = 50;
  public ARTS_GPA: number = 2.0;
  public ENG_FRIENDS: number = 0;
  public ENG_GPA: number = 4.0;

  constructor(props: IProps) {
    super(props);
    this.state = { 
      player: undefined,
      event: undefined,
      promptMsg: "Welcome to UBC Sim!",
      choiceElement: <button onClick={this.chooseFaculty}>Start!</button>
    };
  }

  chooseArts = () => {
    this.setState({
      player: new Player(this.ARTS_FRIENDS, this.ARTS_GPA),
    });
    this.getNextEvent();
  }

  chooseScience = () => {
    this.setState({
      player: new Player(this.SCIENCE_FRIENDS, this.SCIENCE_GPA),
    });
    this.getNextEvent();
  }

  chooseEng = () => {
    this.setState({
      player: new Player(this.ENG_FRIENDS, this.ENG_GPA),
    });
    this.getNextEvent();
  }

  chooseSauder = () => {
    this.setState({
      player: new Player(this.SAUDER_FRIENDS, this.SAUDER_GPA),
    });
    this.getNextEvent();
  }
 
  getNextEvent = () => {
    let e = this.state.player!.getRandomEvent();
    this.setState({ 
      event: e,
      promptMsg: this.state.event!.displayResponse(),
      choiceElement: this.state.event!.displayChoices()
    });
  }

  displayResponse = () => {
    this.setState({
      promptMsg: this.state.event!.displayResponse(),
      choiceElement: <button onClick={this.getNextEvent}>continue</button>
    });
  }

  chooseFaculty = () => {
    this.setState({
      promptMsg: "Choose your faculty!",
      choiceElement: (
        <div>
          <button onClick={this.chooseArts}>Arts</button>
          <button onClick={this.chooseEng}>Engineering</button>
          <button onClick={this.chooseScience}>Science</button>
          <button onClick={this.chooseSauder}>Sauder</button>
        </div>
      )
    });
  }

  render() {
    return (
      <div className="game-container">
        {/* <h2 id="prompt">{this.state.promptMsg}</h2> */}
        {/* <div id="choices">{this.state.choiceElement}</div> */}
        <div className="align-items">
            <section id="scores-bar" className="row">
                {/* Right Column */}
                <div className="row column this-align-left">
                <div className="column">
                    <span id="name">Name: </span>
                    <div id="faculty" className="faculty-badge" />
                </div>
                <div className="column this-display-block">
                    <span id="gpa" className="stat">GPA: </span>
                    <span id="sleep" className="stat">SLEEP: </span>
                    <span id="friends" className="stat">GPA: </span>
                </div>
                
                </div>
                {/* Left Column */}
                <div className="column">
                    <span id="progress-bar">WEEK: </span>
                </div>
            </section>
            <section id="gameplay-area">
                <img src="../public/assets/place-holder-image.png" alt=""/>
            </section>
            <section id="bottom">
              <div id="bottom-menu" className="bottom-container">
                  <p id="prompt" className="this-align-center">
                    You have been invited to a toga party! Are you going to go?
                  </p>
                  <button type="button" className="nes-btn is-primary choice-A">CHOICE A</button>
                  <button type="button" className="nes-btn is-primary choice-b">CHOICE B</button>
              </div>
            </section>
        </div>
      </div>
    );
  }
}
