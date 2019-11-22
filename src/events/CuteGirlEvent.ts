import {IEvent, IChoice, StatChanges} from "./core";

export class CuteGirlEvent implements IEvent {
    prompt(): string {
        return "You see a cute girl in the Life Building, what do you do?";
    }

    imgPath(): string {
        return "";
    }

    choices(): IChoice[] {
        return [
            new BuyTheTix(),
            new ComplimentFilas()
        ];
    }
}

export class CuteFilasEvent implements IEvent {
    prompt(): string {
        return "She takes out her AirPods.\n\"What did you say?\"";
    }

    imgPath(): string {
        return "";
    }

    choices(): IChoice[] {
        return [
            new RunAway(),
            new ShowFilas()
        ];
    }
}

export class CuteGirlTixEvent implements IEvent {
    prompt(): string {
        return "The cute girl from the Life Building asked if you got the VIP tickets for EDC. Did you?";
    }

    imgPath(): string {
        return "";
    }

    choices(): IChoice[] {
        return [
            new OhYes(),
            new Nope()
        ];
    }
}

export class NoVIPTixEvent implements IEvent {
    prompt(): string {
        return "The cute girl from the Life Building doesn't like you anymore because you're poor ):";
    }

    imgPath(): string {
        return "";
    }

    choices(): IChoice[] {
        return [
            new StalkInstagram()
        ];
    }
}

export class HasBoyfriendEvent implements IEvent {
    prompt(): string {
        return "The cute girl from the Life Building just posted a photo of her and her boyfriend at EDC.";
    }

    imgPath(): string {
        return "";
    }

    choices(): IChoice[] {
        return [
            new FiveverAlone()
        ];
    }
}

class FiveverAlone implements IChoice {
    answer(): string {
        return "5ever alone";
    }

    followUps(): IEvent[] {
        return [];
    }

    statChanges(): StatChanges {
        return new StatChanges(-50, -1.5, -15);
    }
}

class RunAway implements IChoice {
    answer(): string {
        return "meep merp. run away";
    }

    followUps(): IEvent[] {
        return [];
    }

    statChanges(): StatChanges {
        return new StatChanges(-25, 0, -15);
    }
}

class ShowFilas implements IChoice {
    answer(): string {
        return "Show her your Filas";
    }

    followUps(): IEvent[] {
        return [];
    }

    statChanges(): StatChanges {
        return new StatChanges(35, 0.5, 0);
    }
}

class BuyTheTix implements IChoice {
    answer(): string {
        return "Buy her EDC (Electronic Daisy Carnival) tickets";
    }

    followUps(): IEvent[] {
        return [
            new CuteGirlTixEvent()
        ];
    }

    statChanges(): StatChanges {
        return new StatChanges(5, -0.01, 0);
    }
}

class ComplimentFilas implements IChoice {
    answer(): string {
        return "Compliment her Filas";
    }

    followUps(): IEvent[] {
        return [
            new CuteFilasEvent()
        ];
    }

    statChanges(): StatChanges {
        return new StatChanges(1, 0, 0);
    }
}

class StalkInstagram implements IChoice {
    answer(): string {
        return "Stalk her on Instagram";
    }

    followUps(): IEvent[] {
        return [];
    }

    statChanges(): StatChanges {
        return new StatChanges(-50, -1.5, -35);
    }
}

class OhYes implements IChoice {
    answer(): string {
        return "OH YES";
    }

    followUps(): IEvent[] {
        return [
            new HasBoyfriendEvent()
        ];
    }

    statChanges(): StatChanges {
        return new StatChanges(20, -0.02, -3);
    }
}

class Nope implements IChoice {
    answer(): string {
        return "no...";
    }

    followUps(): IEvent[] {
        return [
            new NoVIPTixEvent()
        ];
    }

    statChanges(): StatChanges {
        return new StatChanges(-5, 0, 0);
    }
}
