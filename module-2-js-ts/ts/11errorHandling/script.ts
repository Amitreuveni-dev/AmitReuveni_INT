function doSomething() {
    try {
        throw new Error();
    } catch {
        console.log("hellomyfriend");
    } finally {
        console.log("world");
    }
}

try {
    doSomething();
    console.log("hello")
} catch {
    console.log("!");
}
