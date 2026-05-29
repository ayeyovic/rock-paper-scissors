console.log("Hello World!");

function getComputerChoice() {
    num = Math.random();
    let choice = "";

    if (num <= 0.33){
        return "rock"; 
    } else if ( num > 0.33 && num <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
    
}

console.log( getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("Please enter Rock, Paper, or Scissors: ");
    return humanChoice;
}

let hChoice = getHumanChoice();
let cChoice = getComputerChoice();

console.log(hChoice);






function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase(); // Case insensitive Human Choice

        // Dont do 6 comparisons to check
        // Only 3 Possible ooutcomes
        // Win, Tie, Loss

        // setup a JS object with keys to determine win without comparing
        // key = humanChoice parameter
        // rhs value = computerChoice paramter
        const win = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper"
        };

        // Now check who wins the round, 3 if statements

        // Check if human wins
        if (win[humanChoice] == computerChoice) {
            //eg if humanChoice = rock and computerChoice = scissors, human wins
            // print console message
            console.log("Congrats you win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        }

        // check if computerChoice wins
        else if (win[computerChoice] == humanChoice) {
            //eg if humanChoice = rock and computerChoice = scissors, human wins
            // print console message
            console.log("Sorry you lose! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }

        // tie
        else {
            console.log("It's a Tie! " + computerChoice + " same as " + humanChoice);
        }

    }

    for(let i = 0; i < 5; i++ ){
        playRound(getHumanChoice(), getComputerChoice())
    }

}

playGame();

console.log(humanScore);
