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
    var finalChoice = selection.toLowerCase();
    console.log(finalChoice);
    return finalChoice; 
}

function playRound(playerSelection, computerSelection){
    if(computerSelection == "rock"){
        switch(playerSelection){
            case 'rock': 
                console.log("Draw")
                return 'Draw'
                break
            case 'paper': 
                console.log("you win")
                playerWins++;
                return "You win! Paper beats rock"
                break
            case 'siccors': 
                console.log("You loose")
                computerWins++;
                return "You loose! rocks beats scissors"
                break;
         }
        
    }//end if statement

    if(computerSelection == "paper"){
         switch(playerSelection){
            case 'paper': 
                console.log("Draw")
                return 'Draw'
                break
            case 'scissors': 
                console.log("you win")
                playerWins++;
                return 'You win! Scissors beat paper'
                break
            case 'rock': 
                console.log("You loose")
                computerWins++;
                return "You loose! Paper beats rock"
                break
         }   
    }//end if statement

    if(computerSelection == "scissors"){
        switch(playerSelection){
            case 'scissors': 
                console.log("Draw")
                return "Draw"
                break
            case 'rock': 
                playerWins++;
                console.log("You win")
                return 'You win! Scissors beat paper'
                break
            case 'paper':
                computerWins++;
                console.log("you loose")
                return 'You loose! Scissors beat paper'
                break
        }
    }// end if statement

}// end of playRound

/**
 * function that begins the game and goes for five rounds
 */
function game(){
    console.log("Game has begun!");

    for (let i = 0; i <= 5; i++) {
        let player = playerSelection()
        let computer = computerSelection()
        let round = playRound(player, computer)
    }

    if(computerWins < playerWins){
        console.log("You win")
        return "you Win!"
    }
    if(computerWins > playerWins){
        console.log("You loose")
        return "Sorry you loose"
    }
    else{
        console.log("Draw")
        return "Draw!"
    }
}// end game function
