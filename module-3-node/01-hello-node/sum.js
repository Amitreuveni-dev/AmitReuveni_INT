// const [,, firstInput, secondInput] = process.argv;

// const firstNumber = Number(firstInput);
// const secondNumber = Number(secondInput);

// if (isNaN(firstInput)) {
//     console.error(`${firstInput} is not a number!`)
// } else if (isNaN(secondInput)) {
//     console.error(`${secondInput} is not a number!`)
// } else {
//     console.log(firstNumber + secondNumber);
// }

////

const numbers = process.argv.slice(2);

const sum = numbers.reduce((amit, num) => amit + Number(num), 0);

console.log(`the result is ${sum}`);