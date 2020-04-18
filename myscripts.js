// Generates a Random Computer Selection
function computerPlay(){
    switch(Math.floor(Math.random() * 3) + 1){
         case 1:{
             let computerSelection = "rock";
             return computerSelection

         } case 2:{
             let computerSelection = "paper";
             return computerSelection

         } case 3:{
             let computerSelection = "scissors"
             return computerSelection

         } default:
             alert("Error something went wrong")
    }            
    } 
 // Allows the user to make a selection input
function userPlay(){
     
     var playerSelection = prompt("Choose a weapon", "Rock, Paper, or Scissors").toLowerCase();

         if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
             return playerSelection;
         } else {
             alert("That was not an option dude. C'mon actually pick one"); 
             userPlay()  
         }
}   
/*function playRound(playerSelection,computerSelection) {
     
 // Can evaluate all possible combinations based off of both inputs
             switch (true) {

                case (playerSelection == computerSelection): {
                 alert("Draw!!! Try again!");
                 break;

             }  case (playerSelection == "paper" && computerSelection == "scissors"): {
                 alert("You Lose! Scissors beats Paper!");
                 break;

             }  case (playerSelection == "rock" && computerSelection == "paper"): {
                 alert("You Lose! Paper beats Rock!");
                 break;

             }  case (playerSelection == "scissors" && computerSelection == "rock"): {
                 alert("You Lose! Rock beats Scissors!");
                 break;

             }  case (playerSelection == "scissors" && computerSelection == "paper"): {
                 alert("You Win! Scissors beats Paper!");
                 break;

              } case (playerSelection == "paper" && computerSelection == "rock"): {
                 alert("You Win! Paper beats Rock!");
                 break;

             }  case (playerSelection == "rock" && computerSelection == "scissors"): {
                 alert("You Win! Rock beats Scissors!");
                 break;
         
             }  default: {
                 alert("Something went wrong");
             }               
    }
}*/

 //Computer makes random decision input
 const playerSelection = userPlay();
 const computerSelection = computerPlay(); 
 console.log(playerSelection)
 console.log(computerSelection)
 //console.log(playRound(playerSelection,computerSelection))