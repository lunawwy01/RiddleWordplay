"use strict";

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess1 = document.querySelector(".guess:nth-of-type(1)").value;
  const guess2 = document.querySelector(".guess:nth-of-type(2)").value;
  const guess3 = document.querySelector(".guess:nth-of-type(3)").value;

  // Test the input
  console.log(guess2);

  // When there is no input
  if (!guess1 || !guess2 || !guess3) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage("⛔️ No Word!");

    // When player wins
  } else if (guess1 == "K" && guess2 == "F" && guess3 == "C") {
    displayMessage("🎉 Correct! It is KFC!");
    document.querySelector(".number").innerHTML =
      "<img src='KFCLogo.png' class='number-image'>";
    //document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector("body").style.backgroundImage =
      "url('KFCBackground.jpg')";
    //document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundSize = "100% 100%";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  document.querySelector(".again").addEventListener("click", function () {
    displayMessage("Start guessing...");
    // document.querySelector(".score").textContent = score;
    // document.querySelector(".number").textContent = "?";
    document.querySelector(".guess:nth-of-type(1)").value = "";
    document.querySelector(".guess:nth-of-type(2)").value = "";
    document.querySelector(".guess:nth-of-type(3)").value = "";

    document.querySelector("body").style.backgroundImage = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").innerHTML = "";
  });
});
