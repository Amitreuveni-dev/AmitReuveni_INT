function newGameBegin() {
    var menu = prompt("Please chose an option!\n" +
        "1. Start a new game.\n" +
        "2. Chenge the settings.\n" +
        "3. Exit the game.");
    var firstPlayer = prompt("Hello player #1\nPlease enter your name");
    alert("Hello " + firstPlayer);
    var secondPlayer = prompt("Hello player #2\nPlease enter your name");
    alert("Hello " + secondPlayer);
    alert("Please delete 1 or 3 sticks to start the game");
}
function firstPlayerHit() {
}
function secondPlayerHit() {
}
newGameBegin();
