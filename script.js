"use strict";
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct Number! 🎉 ";

document.querySelector(".number").textContent = 13;

document.querySelector(".score");

document.querySelector(".guess").value = 13;
console.log(document.querySelector(".guess").value);
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

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
    displayMessage("Start guessing...");
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    secretNumber = Math.trunc(Math.random() * 20 + 1);
  });

  // When there is no input
  if (!guess) {
    displayMessage("⛔ No Number");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct Number! 🥳");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score >= 1) {
      displayMessage(guess > secretNumber ? "Too High! 📈" : "Too low 📉");
      score--;
      textScore();
    } else {
      displayMessage("💥 You lost the game!");
    }
  }
});

