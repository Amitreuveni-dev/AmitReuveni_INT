function doSomething() {
    try {
        throw new Error();
    } catch {
        throw new Error();
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
