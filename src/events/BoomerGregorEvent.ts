import { IEvent, IChoice, StatChanges } from "./core";

export default class BoomerGregorEvent implements IEvent {
    prompt(): string {
        return "Dr. Gregor tells the class to start studying for CPSC 110 early!";
    }

    imgPath(): string {
        return "";
    }

    choices(): IChoice[] {
        return [
            new TrustNaturalRecursion(),
            new OkBoomer()
        ];
    }

    shouldGpcHidden(): boolean {
        return true;
    }

    hasBottomBoxBorder(): boolean {
        return false;
    }
}

class TrustNaturalRecursion implements IChoice {
    answer(): string {
        return "Trust the natural recursion";
    }

    followUps(): IEvent[] {
        return [];
    }

    statChanges(): StatChanges {
        return new StatChanges(10, 0.5, -15);
    }
}

class OkBoomer implements IChoice {
    answer(): string {
        return "Ok, Boomer";
    }

    followUps(): IEvent[] {
        return [];
    }

    statChanges(): StatChanges {
        return new StatChanges(60, -0.02, -8);
    }
}