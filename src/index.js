"use strict";
var DEFAULT_SLEEP = 100;
var State = (function () {
    function State(friends, gpa) {
        this.pool = new Set();
        this.queue = [];
        this.friends = friends;
        this.gpa = gpa;
        this.sleep = DEFAULT_SLEEP;
        this.week = 0;
    }
    return State;
}());
