var strings = [];
var userStrings = prompt("Please enter a name");
while (userStrings !== null) {
    strings.push(userStrings);
    userStrings = prompt("Please enter a name");
}
if (strings.length > 0) {
    var userChoice = prompt("Please choose a number between 1 and " + strings.length);
    while (userChoice !== null && (isNaN(Number(userChoice)) || Number(userChoice) < 1 || Number(userChoice) > strings.length)) {
        userChoice = prompt("Invaldid choice. Please choose a number between 1 and " + strings.length);
    }
    if (userChoice !== null) {
        var choiceIndex = Number(userChoice) - 1;
        alert("You chose: " + strings[choiceIndex]);
    }
}
else {
    alert("No names were entered");
}
