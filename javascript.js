let humanScore = 0;
let computerScore = 0; 
const maxScore = 5;

const scores = document.querySelectorAll('.score');
const buttons = document.querySelectorAll("button");
const computerChoiceText = document.querySelector(".computer-choice"); 
const message = document.querySelector('.message')
const btnNewGame = document.querySelector('.new-game')
btnNewGame.style.visibility = 'hidden'; 

btnNewGame.addEventListener("click", () => {
    resetGame();
    if (btnNewGame.style.visibility == 'visible') btnNewGame.style.visibility = 'hidden'; 
})

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

resetGame(); 

function getComputerChoice(){
    const num = Math.random();

    let text; 

    num < (1/3) ? text = "rock" :
    num < 2/3 ? text = "paper":
    text = "scissors";

    updateComputerChoiceText(text);
    return text; 
}


function playRound(humanChoice, computerChoice){

    (computerChoice[0] == "s" && humanChoice[0] == "p") ||
    (computerChoice[0] == "p" && humanChoice[0] == "r") ||
    (computerChoice[0] == "r" && humanChoice[0] == "s") ? (++computerScore, updateMessage('Computer scores')) : 
    computerChoice[0] == humanChoice[0] ? (updateMessage('Draw')) : 
    (++humanScore, updateMessage('You score')); 
    
    updateScores();
    if (computerScore >= maxScore || humanScore >= maxScore) finishGame(); 
}

function updateComputerChoiceText(text){
    computerChoiceText.textContent = text;
}

function updateMessage(text){
    message.textContent = text; 
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

function finishGame(){
    computerScore > humanScore ? updateMessage ("COMPUTER WINS")
    : updateMessage("YOU WIN");

    console.log (btnNewGame.style.visibility)
    btnNewGame.style.visibility = 'visible'; 
    console.log (btnNewGame.style.visibility)
}

function resetGame(){
    console.log ("reset game")

    humanScore = 0; 
    computerScore = 0; 
    updateScores();
    updateComputerChoiceText("Computer's choice")
    updateMessage("New game has started. Make your choice");
}

