/* Global */

let scorePlayer = 0;
let scoreComputer = 0;



/* Content */

const container = document.querySelector("#container");
const scoreTitle = document.querySelector("#scoreTitle");
const score = document.querySelector("#score");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");



/* Events */

rock.addEventListener("click", () => {
    displayResult(playRound("rock", computerPlay()));
});


paper.addEventListener("click", () => {
    displayResult(playRound("paper", computerPlay()));
});


scissors.addEventListener("click", () => {
    displayResult(playRound("scissors", computerPlay()));
});



/* Functions */

function displayResult(roundResult) {    
        const result = document.createElement("div");
        result.classList.add("result");
        result.style.cssText = "color: #666; font-size: 13px; margin: 5px auto;";

        scorePlayer = scorePlayer + roundResult[1];
        scoreComputer = scoreComputer + roundResult[2];
        scoreText = `Player: ${scorePlayer} vs. Computer: ${scoreComputer}`;

        result.textContent = roundResult[0];
        container.appendChild(result);

        score.textContent = scoreText;

    if (scorePlayer >= 5 || scoreComputer >= 5) { 
            scoreTitle.style.cssText = "color: darksalmon;" 
            scoreTitle.textContent = `${finalResult()}`;
            disableButtons();
    }
}


function finalResult() {
    if (scorePlayer > scoreComputer) {
        return "You win";
    } else {
        return "You lose";
    }  
}


function disableButtons() {
    const button = document.getElementsByTagName("button");

    for (let i = 0; i < button.length; i++) {
        button[i].style.cssText = "border: 1px solid #eee; color: #ccc;"
        button[i].disabled = true;
    }

    /* Spread syntax */
    /*
        let buttonArray = [...button];

        buttonArray.forEach(element => {
            element.style.cssText = "border: 1px solid #eee; color: #ccc;"
            element.disabled = true;
        });
    */
}


function playRound(playerSelection, computerSelection) {   
    playerSelection = playerSelection.toLowerCase();

    let playMessage;
    let pointsPlayer = 0;
    let pointsComputer = 0;

    if (playerSelection == computerSelection) {
            playMessage = "It's a tie.";
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            playMessage = "You lose. Paper beats rock.";
            pointsComputer = 1;
        } else if (computerSelection == "scissors") {
            playMessage = "You win. Rock beats scissors.";
            pointsPlayer = 1;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playMessage = "You win. Paper beats rock.";
            pointsPlayer = 1;
        } else if (computerSelection == "scissors") {
            playMessage = "You lose. Scissors beat paper.";
            pointsComputer = 1;
        }            
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            playMessage = "You lose. Rock beats scissors.";
            pointsComputer = 1;
        } else if (computerSelection == "paper") {
            playMessage = "You win. Scissors beat paper.";
            pointsPlayer = 1;
        } 
    } else {
        playMessage = "Please choose rock, paper or scissors.";
    }

    return [playMessage, pointsPlayer, pointsComputer];    
}


function computerPlay() {
    let hand = ["rock", "paper", "scissors"];

    return hand[Math.floor(Math.random() * hand.length)];
}