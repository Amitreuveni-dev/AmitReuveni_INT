function doSomething() {
    try {
        throw new Error();
    }
    catch (_a) {
        throw new Error();
    }
    finally {
        console.log("world");
    }
}
try {
    doSomething();
    console.log("hello");
}
catch (_a) {
    console.log("!");
}
