/**
 * @name Mccray
 * @version 1.0.
 * This is the javascript code for a rock,paper, scissors game 
 * made for the odin project
 */


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
                return "You win! Paper beats rock"
                break
            case 'siccors': 
                return "You loose! rocks beats scissors"
                break;
         }
        
    }

    if(computerSelection == "paper"){
         switch(playerSelection){
            case 'paper': 
                return 'Draw'
                break
            case 'scissors': 
                return 'You win! Scissors beat paper'
                break
            case 'rock': 
                return "You loose! Paper beats rock"
                break
         }   
    }

    if(computerSelection == "scissors"){
        switch(playerSelection){
            case 'scissors': 
                return "Draw"
                break
            case 'rock': 
                return 'You win! Scissors beat paper'
                break
            case 'paper':
                return 'You loose! Scissors beat paper'
                break
        }
    }

}

/**
 * function that begins the game and goes for five rounds
 */
function game(){
    for (let i = 0; i <= 5; i++) {
        let player = playerSelection()
        let computer = computerSelection()
        let round = playRound(player, computer)
    }
}
