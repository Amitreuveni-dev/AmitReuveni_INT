function doSomething() {
    try {
        throw new Error();
    }
    catch (_a) {
        console.log("hellomyfriend");
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
