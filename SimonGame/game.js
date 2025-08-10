let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickPattern = [];
var audio;
let level = 0;
let h1 = $("#level-title");

function nextSequence() {
  level += 1;
  userClickPattern = [];
  h1.text("Level " + level);
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChoosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChoosenColor);
  $("#" + randomChoosenColor)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChoosenColor);
}

$("div[type='button']").on("click", function () {
  let userChosenColor = $(this).attr("id");
  userClickPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickPattern.length - 1);
});

function playSound(name) {
  audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(() => {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

$(document).on("keydown", function () {
  if (h1.text() === "Press A Key to Start" || h1.text() === "Game Over, Press Any Key to Restart") {
    nextSequence();
  }
});

function checkAnswer(currentLevel) {
  if (userClickPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("Success");
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    h1.text("Game Over, Press Any Key to Restart");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
  if (userClickPattern.length === gamePattern.length) {
    setTimeout(() => {
      nextSequence();
    }, 1000);
  }
}

function startOver(){
  level = 0;
  gamePattern = [];
}
