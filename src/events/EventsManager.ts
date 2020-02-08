import { IEvent } from "./Core";

export default class EventsManager {
    private mgr: Map<string, IEvent> = new Map<string, IEvent>();

    public constructor(eventsJson: any) {
        const keys = Object.keys(eventsJson);
        const vals = Object.values(eventsJson);

        for (let i = 0; i < keys.length; i++) {
            this.mgr.set(keys[i], vals[i] as IEvent);
        }
    }

    public get(e: string): IEvent {
        const res = this.mgr.get(e);
        if (!res) {
            throw new Error(`fatal: cannot find event '${e}'`);
        } else {
            return res;
        }
    }
}
