import {IChoice} from "./core";

export default class ChoicesManager {
    private mgr: Map<string, IChoice> = new Map<string, IChoice>();

    public constructor(choicesJson: any) {
        const keys = Object.keys(choicesJson);
        const vals = Object.values(choicesJson);

        for (let i = 0; i < keys.length; i++) {
            this.mgr.set(keys[i], vals[i] as IChoice);
        }
    }

    public get(c: string): IChoice {
        const res = this.mgr.get(c);
        if (res === undefined) {
            throw new Error(`fatal: cannot find choice '${c}'`);
        } else {
            return res;
        }
    }
};
