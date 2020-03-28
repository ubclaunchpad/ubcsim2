import { IEvent } from "../events/core";
import { GamePlayMode } from "../events/core";
import ChoicesManager from "../events/ChoicesManager";

export default class EventTracker {
    readonly SEASONAL_CHANCE = 30;
    private pool: IEvent[];
    private queue: IEvent[];
    private seasonal: IEvent[][];

    constructor(eventPool: IEvent[], eventQueue: IEvent[], seasonalPool: IEvent[][]) {
        this.pool = eventPool;
        this.queue = eventQueue;
        this.seasonal = seasonalPool;
    }

    public removeMobiles(cm: ChoicesManager) {
        this.pool = this.pool.filter(evt =>
            evt.choices.map(cm.get.bind(cm))
                .every(c => c.minigame === ""));
        for (let i = 0; i < this.seasonal.length; ++i) {
            this.seasonal[i] = this.seasonal[i].filter(evt =>
                evt.choices.map(cm.get.bind(cm))
                    .every(c => c.minigame === ""));
        }
    }

    public getNextEvent(week: number): IEvent {
        // The queue being non-empty indicates there is a follow up
        // event to go through, otherwise pick a random event
        if (this.queue.length > 0)
            return this.queue.shift() as IEvent;

        // const r = Math.random() * 100;
        // 0 to 11
        const month = (Math.floor(week / 4)) % 4;
        if (this.pool.length > 0 &&
            (this.seasonal[month].length === 0)) {
            // If we roll a normal pool or if there are no seasonal events then
            // use the normal pool (given that there are still things in the
            // normal pool)
            let event = this.pool[Math.floor(Math.random() * this.pool.length)];
            const index = this.pool.indexOf(event);
            this.pool.splice(index, 1);
            return event;
        } else if (this.seasonal[month].length > 0) {
            // Else we use the seasonal events pool
            let event = this.seasonal[month][Math.floor(Math.random() * this.seasonal[month].length)];
            const index = this.seasonal[month].indexOf(event);
            this.seasonal[month].splice(index, 1);
            return event;
        } else {
            return {
                "prompt": "Oops! No more events!",
                "imgPath": "",
                "choices": [],
                "hasBottomBoxBorder": true,
                "hasInnerFill": true,
                "gamePlayMode": GamePlayMode.Hide
            };
        }
    }

    public queueFollowUpEvent(event: IEvent) {
        this.queue.unshift(event);
    }
}
