function HandleCancel(){
    alert("Enjoy your day :)");
    throw new Error();
}

let userInput = prompt("Hey what's your name?");

while (userInput === "" || !isNaN(userInput)){
    if (userInput === null){        
    HandleCancel();
} 

    alert("Please enter a valid name.");
    userInput = prompt("Hey what's your name?");

}
alert("Hello " + userInput + "!");



const quitFunction = prompt("welcom to my game\nfor playing just press enter in your keyboerd or write something\nif you want already to quit please click the cancel button");
if (quitFunction === null){
    HandleCancel();
}
alert("enjoy the game");

let sumNumbers = 0;
let numbersToRead = prompt("how many numbers do you want to input?");

while(numbersToRead === "" || isNaN(numbersToRead) || numbersToRead <= 0){
    if (numbersToRead === null) {
        HandleCancel();
    }
        alert("plaese enter just a valid number (not an empty line)");
        numbersToRead = prompt("how many numbers do you want to input?");
}
    alert("you chose " + numbersToRead + " numbers");


for (let i = 0; i < numbersToRead; i++) {
    const numberToAdd = Number(prompt("please enter a number"));
    
    const userChoise = Number(numberToAdd);
    
    if (numberToAdd === null){
        HandleCancel();
}
    if (isNaN(userChoise)) {
        alert("please enter a valid number. ");
        i--;
    } else {
        sumNumbers += userChoise;
    }
}
const average = sumNumbers / numbersToRead;
alert("The average is: " + average);



// 1. Fix avg so the user should click the "cancel" button to finish the input (update the prompt to reflect the change)
// 2. Student stats
    // * First  ask the user which operation he want to perform: max, min
//     * Read student grades using 2 prompts (full name then grade)
//     * Validate grades (0 - 100)
//     * Ask to fix invalid grades
//     * Stop reading students when user clicks "cancel"
//     * Display the student's name according to the requested operation
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