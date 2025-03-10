// 3. I have time for a full guess my number project!
//     * Add a main menu where the user can start a new game, change the settings, or quit
//     * After each play, return to the main menu
//     * If the user clicks "cancel" in the prompt, allow the user to give up (ask if the user wants to give up)
//     * Settings to modify:
//         * Difficulty - change the range the selected number can be chosen from (higher difficulty === wider range)
//         * Number of gueeses
//         * Play mode - classic (above/bellow) or hot/cold (remember the previous guess and say hot/cold if the current guess is closer/further from the secret number respectively)
//     * Validate all the inputs
//     * Handle "cancel"


const minNum = 1
const maxNum = 100


let answer;
let attempts;
let guess;
let running;
let gameSettings = { min: minNum, max: maxNum };

function startgame() {
    answer = Math.floor(Math.random() * (gameSettings.max - gameSettings.min + 1)) + gameSettings.min;
    attempts = 0;
    running = true;



    while (running) {
        guess = Number(prompt(`Guess a number between ${gameSettings.min} - ${gameSettings.max}`));

        if (isNaN(guess)) {
            alert("Please enter a valid number");
        } else if (guess < minNum || guess > maxNum) {
            alert("Please enter a valid number between ");
        } else {
            attempts++;
            if (guess < answer) {
                alert("TOO LOW! Please try again! ");
            } else if (guess > answer) {
                alert("TOO HIGH! Please try again!");
            } else {
                alert(`Correct! the answer is ${answer}. it took you ${attempts} attempts`);
                running = false;
            }
        }

    }
}

function changeSettings() {
    let newMin = Number(prompt("Please chose your new minimum number")));
    let newMax = Number(prompt("Please chose your new maximum number")));

    if (isNaN(newMin) || isNaN(newMax) || newMin >= newMax) {
        alert("Wrong settings please try again");
    } else {
        gameSettings.min = newMin;
        gameSettings.max = newMax;
        alert(`The settings have changed\nyour new minimum is ${gameSettings.min},\nand your new maximum number is ${gameSettings.max}`);
    }
}

function mainMenu() {
    let choice;
    do {
        choice = prompt("Please choose an option\n1. Start a new game\n2. Change the settings\n3. quit the game");

        switch (choice) {
            case "1":
                startgame();
                break;
            case "2":
                changeSettings();
                break;
            case "3":
                let quitGame = confirm("Are you sure you want to quit the game already");
                if (!quitGame) {
                    mainMenu();
                    break;
                }
                alert("Thanks for playing have a good day!");
                break;
            default:
                alert("Invalid selection, Please try again");
        }
    } while (choice !== "3");
}


mainMenu();