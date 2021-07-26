"use strict";
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct Number! 🎉 ";

document.querySelector(".number").textContent = 13;

document.querySelector(".score");

document.querySelector(".guess").value = 13;
console.log(document.querySelector(".guess").value);
*/

const secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number";

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number! 🥳";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    // When guess is High
  } else if (guess > secretNumber) {
    if (score >= 1) {
      document.querySelector(".message").textContent = "Too High! 📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
    }

    // When guess is Low
  } else if (guess < secretNumber) {
    if (score >= 1) {
      document.querySelector(".message").textContent = "Too Low! 📉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
    }
  }
});
