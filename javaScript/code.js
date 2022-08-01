/**
 * @name Mccray
 * @version 1.0.
 * This is the javascript code for a rock,paper, scissors game 
 * made for the odin project
 */

/** Vsaribles for the number of wins for the player and the computer */
 playerWins = 0
 computerWins = 0

 /** Varibles for the current selcetion for the computer and the player*/
 currentPlayerselection = 0
 currentComputerSelection = 0

 /**Current Round number */
 currentRound = 0

/**
 * Returns the running score of the player and the computer
 * @returns Scores of the plaeyer and the computer
 */
function runningScore(){
    return "\nPlayer: "+playerWins + "\n" +"Computer " + computerWins
}
/**
 * randomly returns rock,paper, or scissors
 * @returns choice of the computer
 */
function computerSelection(){
    let choices = ["rock", 'paper', 'scissors'];
    let random =Math.floor(Math.random()*choices.length);
    let choice= choices[random];
    console.log(choice);
    return choice;
}


/**
 * Play a round of rock, paper, or scissors
 * @param {} playerSelection 
 * @param {*} computerSelection 
 * @returns The result of the round
 */
function playRound(playerSelection, computerSelection){
    console.log("New Round has begun!")
    if(computerSelection == "rock"){
        switch(playerSelection){
            case 'rock': 
                console.log("Draw")
                roundSummary('Draw')
                break
            case 'paper': 
                console.log("you win")
                playerWins++;
                roundSummary("You win! Paper beats rock")
                break
            case 'siccors': 
                console.log("You loose")
                computerWins++;
                roundSummary("You loose! rocks beats scissors")
                break;
         }
        
    }//end if statement

    if(computerSelection == "paper"){
         switch(playerSelection){
            case 'paper': 
                console.log("Draw")
                roundSummary('Draw')
                break
            case 'scissors': 
                console.log("you win")
                playerWins++;
                roundSummary('You win! Scissors beat paper')
                break
            case 'rock': 
                console.log("You loose")
                computerWins++;
                roundSummary("You loose! Paper beats rock")
                break
         }   
    }//end if statement

    if(computerSelection == "scissors"){
        switch(playerSelection){
            case 'scissors': 
                console.log("Draw")
                roundSummary("Draw")
                break
            case 'rock': 
                playerWins++;
                console.log("You win")
                roundSummary('You win! Scissors beat paper')
                break
            case 'paper':
                computerWins++;
                roundSummary('You loose! Scissors beat paper')
                console.log( 'You loose! Scissors beat paper')
                break
        }
    }// end if statement

}// end of playRound

/**
 * function that begins the game and goes for five rounds
 */

const gameMenu = document.querySelector('#gameMenu')

function game(){
    console.log("Game has begun!");

    const content = document.createElement('div');
    content.classList.add('content')
    content.setAttribute('id', 'gameScore')

    const roundSummary = document.createElement('div');
    content.classList.add('roundSummary')
    roundSummary.setAttribute('id', 'roundSummary')

    gameMenu.appendChild(content);
    gameMenu.appendChild(roundSummary);
}// end game function


/**
 * function to update the score on the game menu
 */
function updateRunningScore(){

    document.getElementById("gameScore").textContent =  runningScore();

}

/**
 * Returns a summary of the most recent round the 
 * gameMenu for the user to see
 * @return returns a summary of the round
 */

function roundSummary(round){
    document.getElementById('roundSummary').textContent = round;

}

/**
 * Checks the currentRound to make sure it doesn't go past 5
 * @returns 
 */
function checkRound(){
    console.log(currentRound)
    if(currentRound >= 5){

        if(computerWins < playerWins){
            console.log("New window should open")
            window.location.replace('../podium/playerWin.html')
        }
        if(computerWins > playerWins){
            console.log("new window should open")
            window.location.replace('../podium/computerWin.html')
        }
        else{
            console.log("Draw")
            window.location.replce('../podium/computerWin.html')
            return "Draw!"
        }
    }
}


/**
 * Event Listners
 */

/**
 * For rock selection button
 */
const selectionButtonRock = document.querySelector('#selectionButtonRock')
selectionButtonRock.addEventListener("click", (e) =>{
    
    currentPlayerSelection = "rock"
    console.log(currentPlayerSelection)
    currentComputerSelection = computerSelection()
    playRound(currentPlayerSelection,currentComputerSelection)

    updateRunningScore()
    currentRound++;
    checkRound()
    
})

/**
 * For paper slection button
 */
const selectionButtonPaper = document.querySelector('#selectionButtonPaper')
selectionButtonPaper.addEventListener("click", (e) =>{
    currentPlayerSelection = "paper"
    console.log(currentPlayerSelection)
    currentComputerSelection = computerSelection()
    playRound(currentPlayerSelection,currentComputerSelection)
    currentRound++;

    updateRunningScore()
    checkRound()
})

/**
 * For scissors slection button
 */
const selectionButtonScissors = document.querySelector('#selectionButtonScissors')
selectionButtonScissors.addEventListener("click", (e) =>{
    currentPlayerSelection = "scissors"
    console.log(currentPlayerSelection)
    currentComputerSelection = computerSelection()
    playRound(currentPlayerSelection,currentComputerSelection)

    updateRunningScore();

    currentRound++;
    checkRound()
})





