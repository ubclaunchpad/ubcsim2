import {IEvent, IChoice} from "./../events/core";

class NoMoreEventsEvent implements IEvent {
    prompt(): string {
        return "Oops! No more events!";
    }

    imgPath(): string {
        return "";
    }

    choices(): IChoice[] {
        return [];
    }
}

export default class EventTracker {
    private pool: IEvent[];
    private queue: IEvent[];

    constructor(eventPool: IEvent[], eventQueue: IEvent[]) {
        this.pool = eventPool;
        this.queue = eventQueue;
    }

    public getNextEvent(): IEvent {
        // The queue being non-empty indicates there is a follow up
        // event to go through, otherwise pick a random event
        if (this.queue.length > 0)
            return this.queue.shift() as IEvent;
        else if (this.pool.length > 0){
            let event = this.pool[Math.floor(Math.random() * this.pool.length)];
            const index = this.pool.indexOf(event);
            this.pool.splice(index, 1);
            return event;
        }
        else
            return new NoMoreEventsEvent();
    }

    public queueFollowUpEvent(event: IEvent) {
        this.queue.unshift(event);
    }
}