import EventTracker from "./EventTracker";
import {IEvent, IChoice} from "./../events/core";

class PoolEvent implements IEvent {
    prompt(): string {
        return "This is a pool event!";
    }

    imgPath(): string {
        return "";
    }

    choices(): IChoice[] {
        return [];
    }

    shouldGpcHidden(): boolean {
      return false;
    }

    hasBottomBoxBorder(): boolean {
      return true;
    }
}

class QueueEvent1 implements IEvent {
    prompt(): string {
        return "This is queue event 1!";
    }

    imgPath(): string {
        return "";
    }

    choices(): IChoice[] {
        return [];
    }

    shouldGpcHidden(): boolean {
      return false;
    }

    hasBottomBoxBorder(): boolean {
      return true;
    }
}

class QueueEvent2 implements IEvent {
    prompt(): string {
        return "This is queue event 2!";
    }

    imgPath(): string {
        return "";
    }

    choices(): IChoice[] {
        return [];
    }

    shouldGpcHidden(): boolean {
      return false;
    }

    hasBottomBoxBorder(): boolean {
      return true;
    }
}

it("should take an event from the random pool if the queue is empty", () => {
    const eventTracker = new EventTracker([new PoolEvent()], []);
    expect(eventTracker.getNextEvent().prompt()).toEqual("This is a pool event!");
});

it("should not take an event from the random pool if the pool is empty", () => {
    const eventTracker = new EventTracker([new PoolEvent()], []);
    expect(eventTracker.getNextEvent().prompt()).toEqual("This is a pool event!");
    expect(eventTracker.getNextEvent().prompt()).toEqual("Oops! No more events!");
});

it("should take an event from the queue if the queue is not empty", () => {
    const eventTracker = new EventTracker([new PoolEvent()], [new QueueEvent1()]);
    expect(eventTracker.getNextEvent().prompt()).toEqual("This is queue event 1!");
});

it("should give back a follow up event if added to the queue", () => {
    const eventTracker = new EventTracker([new PoolEvent()], [new QueueEvent1()]);
    eventTracker.queueFollowUpEvent(new QueueEvent2());
    expect(eventTracker.getNextEvent().prompt()).toEqual("This is queue event 2!");
});
