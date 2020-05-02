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

 const rockInput = document.querySelector('#rock');
 const paperInput = document.querySelector('#paper');
 const scissorsInput = document.querySelector('#scissors');

    rockInput.addEventListener('click', () => {
        playerSelection = "rock";
        //console.log(playerSelection);
    });

    paperInput.addEventListener('click', () => {
        playerSelection = "paper";
        //console.log(playerSelection);
    });

    scissorsInput.addEventListener('click', () => {
        playerSelection = "scissors";
        //console.log(playerSelection);
    });
     
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

function game(){

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
        alert(`Congratulations! You Win ${playerScore} to ${computerScore}. You Get Nothing. Press "New Game" to play again`)
        selection.removeChild(rock);
        selection.removeChild(paper);
        selection.removeChild(scissors);
        selection.appendChild(startGame);
    } else {
        alert(`You have Lost ${computerScore} to ${playerScore}. Is was it is right? Press "New Game" to play again`)
        selection.removeChild(rock);
        selection.removeChild(paper);
        selection.removeChild(scissors);
        selection.appendChild(startGame);
    }
}
const selection = document.querySelector('#selection');
const startGame = document.querySelector('#start-game');
 
startGame.addEventListener('click',() => {

    //Begin Game and add options to choose

    selection.removeChild(startGame);

    let rock = document.createElement('input');
    rock.setAttribute('id', 'rock');
    rock.classList.add('Button');
    rock.type = "button";
    rock.value = "Rock";
    selection.appendChild(rock);

    let paper = document.createElement('input')
    paper.setAttribute('id', 'paper');
    paper.classList.add('Button')
    paper.type = "button";
    paper.value = "Paper";
    selection.appendChild(paper);

    let scissors = document.createElement('input')
    scissors.setAttribute('id', 'scissors');
    scissors.classList.add('Button')
    scissors.type = "button";
    scissors.value = "Scissors";
    selection.appendChild(scissors);
    
});
