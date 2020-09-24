const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");

const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");

const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

const message = document.getElementById("message");

let player1Score = 0;
let player2Score = 0;
let player1Turn = true;
let noOfTurnsP1 = 0;
let noOfTurnsP2 = 0;

function showDisplayButton() {
  rollBtn.style.display = "none";
  resetBtn.style.display = "inline-block";
}

rollBtn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  if (player1Turn) {
    player1Dice.textContent = randomNumber;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    player1Score += randomNumber;
    player1Scoreboard.textContent = player1Score;
    message.textContent = "Player 1 turn";
    noOfTurnsP1++;
  } else {
    player2Dice.textContent = randomNumber;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    player2Score += randomNumber;
    player2Scoreboard.textContent = player2Score;
    message.textContent = "Player 2 turn";
    noOfTurnsP2++;
  }

  if (player1Score >= 20 && player1Score === player2Score) {
    message.textContent = "Match Tied! Let's Go again 🎉";
    showDisplayButton();
  } else if (
    player1Score >= 20 &&
    player1Score > player2Score &&
    noOfTurnsP1 === noOfTurnsP2
  ) {
    message.textContent = "Player 1 has won! 🎉";
    showDisplayButton();
  } else if (player2Score >= 20) {
    message.textContent = "Player 2 has won! 🎉";
    showDisplayButton();
  }
  player1Turn = !player1Turn;
});

resetBtn.addEventListener("click", function () {
  reset();
});

function reset() {
  message.textContent = "Player 1 turn";
  player1Scoreboard.textContent = 0;
  player2Scoreboard.textContent = 0;
  player1Score = 0;
  player2Score = 0;
  player1Turn = true;
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  rollBtn.style.display = "inline-block";
  resetBtn.style.display = "none";
  player1Dice.classList.add("active");
  player2Dice.classList.remove("active");
  noOfTurnsP1 = 0;
  noOfTurnsP2 = 0;
}
