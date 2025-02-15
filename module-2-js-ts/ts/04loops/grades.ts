const numbers: number[] = [];

let userInput = prompt("Please enter a number");

while (userInput !== null) {
    numbers[numbers.length] = (Number(userInput));
    userInput = prompt("Please enter a number");
}

for (let i = 0; i < numbers.length; i++) {
    alert(numbers[i]);
}
