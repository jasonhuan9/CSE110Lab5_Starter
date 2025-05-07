// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  //variables
  const hornselect = document.getElementById("horn-select");
  const volumeslider = document.getElementById("volume");
  const playbutton = document.querySelector("#expose button");
  const hornimage = document.querySelector("#expose img");
  const volumeimage = document.querySelector("#volume-controls img");
  const sound = document.querySelector("#expose audio");

  //changes to correct horn
  function hornChange() {
    const selectedhorn = hornselect.value;
    if (selectedhorn !== "select") {
        hornimage.src = `assets/images/${selectedhorn}.svg`;
        sound.src = `assets/audio/${selectedhorn}.mp3`;
    }
  }

  //sets volume image to the right one
  function volumeChange() {
    const volume = parseInt(volumeslider.value);
    let lvl = 0;
    if (volume >= 67) {
        lvl = 3;
    }
    else if (volume >= 33) {
        lvl = 2;
    }
    else if (volume >= 1) {
        lvl = 1;
    }
    volumeimage.src = `asset/icons/volume-level-${lvl}.svg`;
    sound.volume = volume/100;
  }

  //plays the sound and add confetti if its the party horn
  function playSound() {
    if (hornselect.value !== "select") {
        sound.play();
    }
    if (hornselect.value === "party-horn") {
        new JSConfetti().addConfetti();
    }
  }

  hornselect.addEventListener("change", hornChange);
  volumeslider.addEventListener("input", volumeChange);
  playbutton.addEventListener("click", playSound);
}