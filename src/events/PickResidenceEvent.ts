import { GamePlayMode, IEvent, IChoice, StatChanges } from "./core";

export default class PickResidenceEvent implements IEvent {
    prompt(): string {
        return "It's time to move into your first year residence!";
    }

    imgPath(): string {
        return "";
    }

    choices(): IChoice[] {
        return [
            new TotemPark(),
            new PlaceVanier(),
            new OrchardCommons()
        ];
    }

    hasBottomBoxBorder(): boolean {
        return false;
    }

    gamePlayMode(): GamePlayMode {
        return GamePlayMode.Hide;
    }
}

class TotemPark implements IChoice {
    answer(): string {
        return "Totem Park";
    }

    followUps(): IEvent[] {
        return [];
    }

    statChanges(): StatChanges {
        return new StatChanges(0, 0, 0);
    }
}

class PlaceVanier implements IChoice {
    answer(): string {
        return "Place Vanier";
    }

    followUps(): IEvent[] {
        return [];
    }

    statChanges(): StatChanges {
        return new StatChanges(0, 0, 0);
    }
}

class OrchardCommons implements IChoice {
    answer(): string {
        return "Orchard Commons";
    }

    followUps(): IEvent[] {
        return [];
    }

    statChanges(): StatChanges {
        return new StatChanges(0, 0, 0);
    }
}