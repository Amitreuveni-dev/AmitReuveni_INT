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
let gameSettings = {min: minNum, max:maxNum };

function startgame(start: number){
    answer = Math.floor(Math.random() * (gameSettings.max - gameSettings.min + 1)) + gameSettings.min; 
    attempts = 0;
    running = true;
    
    
    
    while(running) {
    guess = Number(prompt(`Guess a number between ${gameSettings.min} - ${gameSettings.max}`));

    if(isNaN(guess)){
        alert("Please enter a valid number");
    } else if (guess < minNum || guess > maxNum){
        alert("Please enter a valid number between ");
    } else {
        attempts++;
        if(guess < answer){
            alert("TOO LOW! Please try again! ");
        } else if (guess > answer){
            alert("TOO HIGH! Please try again!");
        } else {
            alert(`Correct! the answer is ${answer}. it took you ${attempts} attempts`);
            running = false;
        }
    }
    
}
}