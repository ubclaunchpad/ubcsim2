import {IEvent, IChoice, StatChanges} from "./core";

import ARTS from "../assets/ARTS.png";
import APSC from "../assets/APSC.png";
import COMM from "../assets/COMM.png";
import FORE from "../assets/FORE.png";
import KIN from "../assets/KIN.png";
import LFSlogo from "../assets/LFS.png";
import SCIE from "../assets/SCIE.png";

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
            new Commerce(),
            new Forestry(),
            new Kinesiology(),
            new ApScience(),
            new LFS(),
            new Science()
        ];
    }

    shouldGpcHidden(): boolean {
        return true;
    }

    hasBottomBoxBorder(): boolean {
        return false;
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
        return new StatChanges(50, 2.0, 100, ARTS);
    }
}

class ApScience implements IChoice {
    answer(): string {
        return "Applied Science";
    }

    followUps(): IEvent[] {
        return [];
    }

    statChanges(): StatChanges {
        return new StatChanges(0, 4.0, 100, APSC);
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
        return new StatChanges(50, 3.0, 100, SCIE);
    }
}

class Forestry implements IChoice {
    answer(): string {
        return "Forestry";
    }

    followUps(): IEvent[] {
        return [];
    }

    statChanges(): StatChanges {
        return new StatChanges(100, 2.0, 100, FORE);
    }
}

class Commerce implements IChoice {
    answer(): string {
        return "Commerce";
    }

    followUps(): IEvent[] {
        return [];
    }

    statChanges(): StatChanges {
        return new StatChanges(100, 2.0, 100, COMM);
    }
}

class Kinesiology implements IChoice {
    answer(): string {
        return "Kinesiology";
    }

    followUps(): IEvent[] {
        return [];
    }

    statChanges(): StatChanges {
        return new StatChanges(100, 2.0, 100, KIN);
    }
}

class LFS implements IChoice {
    answer(): string {
        return "Land and Food Systems";
    }

    followUps(): IEvent[] {
        return [];
    }

    statChanges(): StatChanges {
        return new StatChanges(100, 2.0, 100, LFSlogo);
    }
}