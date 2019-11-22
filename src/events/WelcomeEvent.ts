import {IEvent, IChoice, StatChanges} from "./core";
import PickFacultyEvent from "./PickFacultyEvent";

export default class WelcomeEvent implements IEvent {
    prompt(): string {
        return "Welcome to UBC Simulator 2!";
    }

    imgPath(): string {
        return "";
    }

    choices(): IChoice[] {
        return [
            new Starting()
        ];
    }
}

class Starting implements IChoice {
    answer(): string {
        return "Start!";
    }

    followUps(): IEvent[] {
        return [
            new PickFacultyEvent()
        ];
    }

    statChanges(): StatChanges {
        return new StatChanges(0, 0, 0);
    }
}
