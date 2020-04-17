// Generates a Random Computer Selection
function computerPlay(){
    switch(Math.floor(Math.random() * 3) + 1){
         case 1:{
             let computerSelection = "rock";
             //console.log(computerSelection)
                 break;

         } case 2:{
             let computerSelection = "paper";
             //console.log(computerSelection)
                 break;

         } case 3:{
             let computerSelection = "scissors"
             //console.log(computerSelection)
                 break;

         } default:
             let computerSelection = "Error something went wrong"
    }               
 } 
 // Allows the user to make a selection input
 function userPlay(){
     
     let playerInput = prompt("Choose a weapon", "Rock, Paper, or Scissors");

 // Corrects any input a user may put in to meet requirements
     let fixInput = playerInput.toLowerCase();
     
     let options = ["rock","paper","scissors"]    
         if (options.includes(fixInput)){
             let playerSelection = fixInput;
         } else {
             alert("That was not an option dude. C'mon actually pick one");
             userPlay();
         }
 }
 
 function playRound(playerSelection,computerSelection) {
     
 // Can evaluate all possible combinations based off of both inputs
             if (playerSelection == computerSelection) {
                 alert("Draw!!! Try again!");

             } else if (playerSelection == "paper" && computerSelection == "scissors") {
                 alert("You Lose! Scissors beats Paper!");

             } else if (playerSelection == "rock" && computerSelection == "paper") {
                 alert("You Lose! Paper beats Rock!");

             } else if (playerSelection == "scissors" && computerSelection == "rock") {
                 alert("You Lose! Rock beats Scissors!");

             } else if (playerSelection == "scissors" && computerSelection == "paper") {
                 alert("You Win! Scissors beats Paper!");

              } else if (playerSelection == "paper" && computerSelection == "rock") {
                 alert("You Win! Paper beats Rock!");

             } else if (playerSelection == "rock" && computerSelection == "scissors") {
                 alert("You Win! Rock beats Scissors!");
         
             } else {
                 alert("Something went wrong");
             }               
     }

 //Computer makes random decision input
 const playerSelection = userPlay();
 const computerSelection = computerPlay(); 
 console.log(computerSelection)
 console.log(playerSelection)
 console.log(playRound(playerSelection,computerSelection))