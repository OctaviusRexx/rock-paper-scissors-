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
     
     var playerSelection = prompt("Type Rock, Paper, or Scissors",'').toLowerCase();

         while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
            alert("That was not an option dude. C'mon actually pick one"); 
            var playerSelection = prompt("Type Rock, Paper, or Scissors", '').toLowerCase();
         }
        
        return playerSelection
         
}   
function playRound(playerSelection,computerSelection) {
       
    let result;

 // Can evaluate all possible combinations based off of both inputs
             switch (true) {
               //Losing Cases
                case (playerSelection == "paper" && computerSelection == "scissors"): 
                case (playerSelection == "rock" && computerSelection == "paper"): 
                case (playerSelection == "scissors" && computerSelection == "rock"): 
                    alert(`You have lost my guy. ${computerSelection} beats ${playerSelection} :(.`);
                    result = "loss";
                    return result
                //Winning Cases
                case (playerSelection == "scissors" && computerSelection == "paper"):
                case (playerSelection == "paper" && computerSelection == "rock"): 
                case (playerSelection == "rock" && computerSelection == "scissors"): 
                    alert(`Winna Baby! ${playerSelection} beats ${computerSelection} ;)!!`);
                    result = "win";
                    return result
                //Draw
                case (playerSelection == computerSelection): {
                    alert("Draw!!! Go again!");
                    result = "draw"
                    return result
   
             }  default: {
                 alert("Something went wrong");
            }
            
    }
}

 //Used for Testing a Single Round
 //const playerSelection = userPlay();
 //const computerSelection = computerPlay(); 
 //console.log(playerSelection)
 //console.log(computerSelection)
 //console.log(playRound(playerSelection,computerSelection))

function game(result){

    let playerScore = 0;
    let computerScore = 0;
   
    while (playerScore < 3 && computerScore < 3){
        let playerSelection = userPlay();
        let computerSelection = computerPlay(); 
        let result = playRound(playerSelection,computerSelection);
            if (result == "win"){
                playerScore = playerScore + 1;

            }   else if (result == "loss"){
                    computerScore = computerScore + 1;   
            }            
        //Selection Check
        //console.log(`You chose ${playerSelection}`)
        //console.log(`Computer chose ${computerSelection}`)
        alert(`Score is Computer : ${computerScore} Player : ${playerScore}.`);
    }
    if (playerScore > computerScore){
        alert(`Congratulations! You Win ${playerScore} to ${computerScore}. You Get Nothing.`)
    } else {
        alert(`You have Lost ${computerScore} to ${playerScore}. Is was it is right? Click to try again`)
    }
}

