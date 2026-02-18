function getComputerChoice(){
    let num = Math.random();

    return num < (1/3) ? "rock" :
    num < 2/3 ? "paper":
    "scissors";
}

function getHumanChoice (){
    return prompt ("your choice").toLowerCase();
}

function playRound(computerChoice, humanChoice){
    console.log(computerChoice + "(c) vc {h)"  + humanChoice);

   return (computerChoice[0] == "s" && humanChoice[0] == "p") ||
    (computerChoice[0] == "p" && humanChoice[0] == "r") ||
    (computerChoice[0] == "r" && humanChoice[0] == "s") ? "computer wins" : 
    
    computerChoice[0] == humanChoice[0] ? "draw" : "you win";

}


let humanScore = 0;
let computerScore = 0; 

console.log(playRound(getComputerChoice(), getHumanChoice()));