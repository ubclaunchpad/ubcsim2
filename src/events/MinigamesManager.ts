import { IMinigame } from "./core";

export default class MinigamesManager {
    private mgr: Map<string, IMinigame> = new Map<string, IMinigame>();

    public constructor(minigamesJson: any) {
        const keys = Object.keys(minigamesJson);
        const vals = Object.values(minigamesJson);

        for (let i = 0; i < keys.length; i++) {
            this.mgr.set(keys[i], vals[i] as IMinigame);
        }
    }

    public get(m: string): IMinigame {
        const res = this.mgr.get(m);
        if (!res) {
            throw new Error(`fatal: cannot find minigame '${m}'`);
        } else {
            return res;
        }
    }
}