"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

const textScore = function () {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    textScore();
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    console.log(secretNumber);
  });

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number";

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number! 🥳";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    
    if(score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is High
  } else if (guess > secretNumber) {
    if (score >= 1) {
      document.querySelector(".message").textContent = "Too High! 📈";
      score--;
      textScore();
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
    }

    // When guess is Low
  } else if (guess < secretNumber) {
    if (score >= 1) {
      document.querySelector(".message").textContent = "Too Low! 📉";
      score--;
      textScore();
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
    }
  }
});

