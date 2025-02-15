var max = -Infinity;
var secondMax = -Infinity;
var thirdMax = -Infinity;
for (var i = 0; i < 5; i++) {
    var newNumber = Number(prompt("Please enter a number"));
    if (newNumber > max) {
        thirdMax = secondMax;
        secondMax = max;
        max = newNumber;
    }
    else if (newNumber > secondMax) {
        thirdMax = secondMax;
        secondMax = newNumber;
    }
    else if (newNumber > thirdMax) {
        thirdMax = newNumber;
    }
}
alert(thirdMax);
