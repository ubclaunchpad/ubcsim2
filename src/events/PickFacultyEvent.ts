import {IEvent, IChoice, StatChanges} from "./core";

export default class PickFacultyEvent implements IEvent {
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
        return new StatChanges(50, 2.0, 100);
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
        return new StatChanges(0, 4.0, 100);
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
        return new StatChanges(50, 3.0, 100);
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
        return new StatChanges(100, 2.0, 100);
    }
}
