import PlayerStats from "./PlayerStats";
import {StatChanges} from "../events/core";

it("should have zero for all stats on initialization", () => {
    const playerStats = new PlayerStats();

    expect(playerStats.getFriends()).toEqual(0);
    expect(playerStats.getGpa()).toEqual(0);
    expect(playerStats.getSleep()).toEqual(0);
});

it("should be able to update stats properly", () => {
    const playerStats = new PlayerStats();
    const statChanges = new StatChanges(10, 10, 10);
    playerStats.applyStatChanges(statChanges);

    expect(playerStats.getFriends()).toEqual(10);
    expect(playerStats.getGpa()).toEqual(10);
    expect(playerStats.getSleep()).toEqual(10);
});
