/**
 * @name Mccray
 * @version 1.0.
 * This is the javascript code for a rock,paper, scissors game 
 * made for the odin project
 */

/** Vsaribles for the number of wins for the player and the computer */
playerWins = 0
computerWins = 0

/**
 * randomly returns rock,paper, or scissors
 * @returns choice of the computer
 */
function computerSelection(){
    let choices = ["rock", 'paper', 'scissors'];
    let random =Math.floor(Math.random()*choices.length);
    return choices[random];
}

/**
 * Prompts the player to choose between rock, paper, or scissors
 * @returns the choice of the player
 */
function playerSelection(){
    let selection = prompt("Select paper, rock, or scissors: ");
    return playerSelection; 
}

function playRound(playerSelection, computerSelection){
    if(computerSelection == "rock"){
        switch(playerSelection){
            case 'rock': 
                return 'Draw'
                break
            case 'paper': 
                playerWins++;
                return "You win! Paper beats rock"
                break
            case 'siccors': 
                computerWins++;
                return "You loose! rocks beats scissors"
                break;
         }
        
    }//end if statement

    if(computerSelection == "paper"){
         switch(playerSelection){
            case 'paper': 
                return 'Draw'
                break
            case 'scissors': 
                playerWins++;
                return 'You win! Scissors beat paper'
                break
            case 'rock': 
                computerWins++;
                return "You loose! Paper beats rock"
                break
         }   
    }//end if statement

    if(computerSelection == "scissors"){
        switch(playerSelection){
            case 'scissors': 
                return "Draw"
                break
            case 'rock': 
                playerWins++;
                return 'You win! Scissors beat paper'
                break
            case 'paper':
                computerWins++;
                return 'You loose! Scissors beat paper'
                break
        }
    }// end if statement

}// end of playRound

/**
 * function that begins the game and goes for five rounds
 */
function game(){

    for (let i = 0; i <= 5; i++) {
        let player = 'rock'
        let computer = computerSelection()
        let round = playRound(player, computer)
    }
    console.log(playerWins)
    console.log(computerWins)

    if(computerWins < playerWins){
        return "you Win!"
    }
    if(computerWins > playerWins){
        return "Sorry you loose"
    }
    else{
        return "Draw!"
    }
}// end game function

console.log(game());
