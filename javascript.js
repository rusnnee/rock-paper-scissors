let humanScore = 0;
let computerScore = 0; 


while (humanScore < 3 && computerScore < 3){
    console.log(playRound(getComputerChoice(), getHumanChoice()));
    console.log (computerScore + "(c) vs (h) " + humanScore); 
}
console.log("GAME OVER " + (computerScore > humanScore ? "computer" : "human") + " wins");

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

    let ans; 
    (computerChoice[0] == "s" && humanChoice[0] == "p") ||
    (computerChoice[0] == "p" && humanChoice[0] == "r") ||
    (computerChoice[0] == "r" && humanChoice[0] == "s") ? (++computerScore,  ans = "computer wins" ) : 
    
    computerChoice[0] == humanChoice[0] ? ans = "draw" : (ans = "you win", ++humanScore);

    return ans; 
}