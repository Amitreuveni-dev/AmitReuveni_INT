"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function doAsyncWork(fail) {
    if (fail === void 0) { fail = false; }
    console.log("Starting async work...");
    return fail ? Promise.reject() : Promise.resolve();
}
doAsyncWork().then(function () { return console.log("Done"); });
doAsyncWork(true).then(function () { return console.log("Done"); });
doAsyncWork().then(function () { return console.log("Done"); });
