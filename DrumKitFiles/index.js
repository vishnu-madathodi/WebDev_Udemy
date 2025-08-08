let buttons = document.querySelectorAll(".drum");

//function to check key and play sound
function playSound(key) {
  var audio;
  switch (key) {
    case "w":
      audio = new Audio("./sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("./sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("./sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("./sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("./sounds/snare.mp3");
      break;
    case "k":
      audio = new Audio("./sounds/crash.mp3");
      break;
    case "l":
      audio = new Audio("./sounds/kick-bass.mp3");
      break;
    default:
      console.warn("No audio file found!!");
  }
  audio.play();
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let buttonText = this.innerText;
    playSound(buttonText);
    addAnimation(buttonText);
  });
});

//detect for keyboard clicks
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  addAnimation(event.key);
});

//add an animation to the button
function addAnimation(pressedKey){
  var clickedKey = document.querySelector("." + pressedKey);
  clickedKey.classList.add("pressed");
  setTimeout(() => {
    clickedKey.classList.remove("pressed");
  }, 100);
}
