import chalk from "chalk";

console.log(chalk.blue`Hello`, chalk.yellowBright`World`, add(10, 10));

function add(a: number, b: number) {
    return a + b;
}