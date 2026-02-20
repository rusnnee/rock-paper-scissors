let humanScore = 0;
let computerScore = 0; 

const buttons = document.querySelectorAll("button");

buttons.forEach((button)=>{
    switch (button.className){
        case "rock":
            button.addEventListener("click", () => playRound ("r", getComputerChoice()))
            break;

        case "paper":
            button.addEventListener("click", () => playRound ("p", getComputerChoice()))
            break;

        case "scissors":
            button.addEventListener("click", () => playRound ("s", getComputerChoice()))
            break;
    }
})

const scores = document.querySelectorAll('.score');

function getComputerChoice(){
    let num = Math.random();

    return num < (1/3) ? "rock" :
    num < 2/3 ? "paper":
    "scissors";
}

function getHumanChoice (){
    return prompt ("your choice").toLowerCase();
}

function playRound(humanChoice, computerChoice){
    console.log(computerChoice + "(c) vc {h)"  + humanChoice);

    let ans; 
    (computerChoice[0] == "s" && humanChoice[0] == "p") ||
    (computerChoice[0] == "p" && humanChoice[0] == "r") ||
    (computerChoice[0] == "r" && humanChoice[0] == "s") ? (++computerScore,  ans = "computer wins" ) : 
    computerChoice[0] == humanChoice[0] ? ans = "draw" : (ans = "human win", ++humanScore);
    
    updateScores();
    
    console.log( ans); 
    console.log()
    console.log(computerScore + "(c) vc {h)"  + humanScore);
}

function updateScores(){
    scores.forEach((score) =>{
        switch (score.parentNode.id){
            case "human": 
                score.textContent = humanScore;
                break;
            case "computer":
                score.textContent = computerScore; 
                break;
        }
    })
}