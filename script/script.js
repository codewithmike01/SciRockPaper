// A scissor, Rock And Paper Game
// 1 - Sciccors
// 2 - Rock
// 3 - Paper

// Variables
let comChoice = 0;
let comOutput = "";
let comWin = "";
let playWin = "";
let playWinCheck = false;
let comWinCheck = false;
let playerCount = 0;
let comCount = 0;
let userInput = "";

// Variables ref to HTML
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userScore = document.getElementById("userScore");
const comScore = document.getElementById("comScore");
const gameComment = document.getElementById("commentText");
const winComment = document.getElementById("winText");

// Event Listeners
rock.addEventListener("click", rockChoice);
paper.addEventListener("click", paperChoice);
scissors.addEventListener("click", scissorsChoice);

// Winning Engine
function computerPlay() {
  //Computer Choice
  for (let i = 0; i < 1; i++) {
    comChoice = Math.floor(Math.random() * 3) + 1;
    if (comChoice === 1) {
      comOutput = "scissors";
    } else if (comChoice === 2) {
      comOutput = "rock";
    } else comOutput = "paper";
  }
  return comOutput;
}

function playRound(userInput, computerSelection) {
  // Resetter to default False
  playWinCheck = false;
  comWinCheck = false;
  //The Game Play
  let playerOut = userInput;
  let comOut = computerSelection;
  if (comOut === "scissors" && playerOut === "rock") {
    playWin = "You Win! Rock beats Scissors";
    playWinCheck = true;
    return playWin;
  } else if (comOut === "scissors" && playerOut === "paper") {
    comWin = "You Lose! Scissors beats Paper";
    comWinCheck = true;
    return comWin;
  } else if (comOut === "rock" && playerOut === "paper") {
    playWin = "You Win! Paper beats Rock";
    playWinCheck = true;
    return playWin;
  } else if (comOut === "rock" && playerOut === "scissors") {
    comWin = "You Lose! Rock beats Scissors";
    comWinCheck = true;
    return comWin;
  } else if (comOut === "paper" && playerOut === "rock") {
    comWin = "You Lose! Paper beats Rock";
    comWinCheck = true;
    return comWin;
  } else if (comOut === "paper" && playerOut === "scissors") {
    playWin = "You Win! Scissors beats Paper";
    playWinCheck = true;
    return playWin;
  } else if (comOut === playerOut) {
    let bothEqual = "It's a tie";
    return bothEqual; //When equal
  }
}
// Input Level
function game(userInput) {
  // let i = 1;
  // while (i <= 5) {

  if (playerCount !== 5 && comCount !== 5) {
    let computerSelection = computerPlay();
    let finaleOutput = playRound(userInput, computerSelection);
    commentText.innerText = finaleOutput;
    if (playWinCheck === true) playerCount++;
    else if (comWinCheck === true) comCount++;

    userScore.innerText = playerCount;
    comScore.innerText = comCount;

    // Final Output
    setTimeout(() => {
      if (playerCount === 5 || comCount === 5) {
        if (playerCount > comCount) {
          setTimeout(() => {
            window.location.href = "../winner.html";
          }, 1000);
        } else {
          setTimeout(() => {
            window.location.href = "../lose.html";
          }, 1000);
        }
      }
    }, 0);
  }
}

function rockChoice() {
  game("rock");
}
function paperChoice() {
  game("paper");
}
function scissorsChoice() {
  game("scissors");
}
