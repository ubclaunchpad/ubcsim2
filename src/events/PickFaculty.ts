import {IEvent, IChoice, StatChanges} from "../IEvent";

export default class PickFaculty implements IEvent {
    prompt(): string {
        return "Choose your faculty!";
    }

    imgPath(): string {
        return "";
    }

    choices(): IChoice[] {
        return [
            new Arts(),
            new Engineering(),
            new Science(),
            new Sauder()
        ];
    }

}

class Arts implements IChoice {
    answer(): string {
        return "Arts";
    }

    followUps(): IEvent[] {
        return [];
    }

    statChanges(): StatChanges {
        return new StatChanges(50, 3.0, 7);
    }
}

class Engineering implements IChoice {
    answer(): string {
        return "Engineering";
    }

    followUps(): IEvent[] {
        return [];
    }

    statChanges(): StatChanges {
        return new StatChanges(50, 3.0, 7);
    }
}

class Science implements IChoice {
    answer(): string {
        return "Science";
    }

    followUps(): IEvent[] {
        return [];
    }

    statChanges(): StatChanges {
        return new StatChanges(50, 3.0, 7);
    }
}

class Sauder implements IChoice {
    answer(): string {
        return "Sauder";
    }

    followUps(): IEvent[] {
        return [];
    }

    statChanges(): StatChanges {
        return new StatChanges(50, 3.0, 7);
    }
}
