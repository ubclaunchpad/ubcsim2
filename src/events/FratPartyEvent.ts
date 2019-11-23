import {GamePlayMode, IEvent, IChoice, StatChanges} from "./core";

export default class FratPartyEvent implements IEvent {
    prompt(): string {
        return "You have been asked to go to a toga party! Are you going to go?";
    }

    imgPath(): string {
        return "";
    }

    choices(): IChoice[] {
        return [
            new GrossFrats(),
            new YayBedsheets()
        ];
    }

    hasBottomBoxBorder(): boolean {
        return false;
    }

    gamePlayMode(): GamePlayMode {
        return GamePlayMode.Comics;
    }
}

class GrossFrats implements IChoice {
    answer(): string {
        return "Ew! Frats are gross!";
    }

    followUps(): IEvent[] {
        return [];
    }

    statChanges(): StatChanges {
        return new StatChanges(-20, 0.5, 5);
    }
}

class YayBedsheets implements IChoice {
    answer(): string {
        return "I love wearing my bedsheets!";
    }

    followUps(): IEvent[] {
        return [];
    }

    statChanges(): StatChanges {
        return new StatChanges(40, -1.0, -50);
    }
}
