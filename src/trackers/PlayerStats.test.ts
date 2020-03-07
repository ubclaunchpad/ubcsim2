import PlayerStats from "./PlayerStats";

it("should have zero for all stats on initialization", () => {
    const playerStats = new PlayerStats();

    expect(playerStats.getFriends()).toEqual(0);
    expect(playerStats.getGpa()).toEqual(0);
    expect(playerStats.getSleep()).toEqual(0);
});

it("should be able to update stats properly", () => {
    const playerStats = new PlayerStats();
    const statChanges = [1, 1, 1];
    playerStats.applyStatChanges(statChanges);

    expect(playerStats.getFriends()).toEqual(1);
    expect(playerStats.getGpa()).toEqual(1);
    expect(playerStats.getSleep()).toEqual(1);
});

it("should be able to prevent friends stat from going negative", () => {
    const playerStats = new PlayerStats();
    const statChanges = [-10, 0, 0];
    playerStats.applyStatChanges(statChanges);

    expect(playerStats.getFriends()).toEqual(0);
});

it("should be able to prevent GPA stat from going negative", () => {
    const playerStats = new PlayerStats();
    const statChanges = [0, -10, 0];
    playerStats.applyStatChanges(statChanges);

    expect(playerStats.getGpa()).toEqual(0);
});

it("should be able to prevent GPA stat from going above 4.0", () => {
    const playerStats = new PlayerStats();
    const statChanges = [0, 5, 0];
    playerStats.applyStatChanges(statChanges);

    expect(playerStats.getGpa()).toEqual(4);
});

it("should be able to prevent sleep stat from going negative", () => {
    const playerStats = new PlayerStats();
    const statChanges = [0, 0, -10];
    playerStats.applyStatChanges(statChanges);

    expect(playerStats.getSleep()).toEqual(0);
});

it("should be able to prevent sleep stat from going above 100%", () => {
    const playerStats = new PlayerStats();
    const statChanges = [0, 0, 200];
    playerStats.applyStatChanges(statChanges);

    expect(playerStats.getSleep()).toEqual(100);
});
