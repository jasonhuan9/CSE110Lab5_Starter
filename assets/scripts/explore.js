// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const textbox = document.getElementById("text-to-speak");
  const voiceselect = document.getElementById("voice-select");
  const button = document.querySelector("#explore button");
  const faceimage = document.querySelector("#explore img");
  const synthesis = window.speechSynthesis;

  function makeVoices() {
    const voices = synthesis.getVoices();
    voiceselect.innerHTML = "<option value = 'select' disabled selected>Select Voice:</option>";
    voices.forEach(voice => {
        const option = document.createElement("option");
        option.value = voice.name;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceselect.appendChild(option);
    });
  }

  makeVoices();
  synthesis.addEventListener("voiceschanged", makeVoices);

  function sayText() {
    if (textbox.value.trim() && voiceselect.value !== "select") {
        const utterance = new SpeechSynthesisUtterance(textbox.value);
        const selectedvoice = synthesis.getVoices().find(voice => voice.name === voiceselect.value);
        utterance.voice = selectedvoice;
        utterance.addEventListener("start", () => {faceimage.src = "assets/images/smiling-open.png";});
        utterance.addEventListener("end", () => {faceimage.src = "assets/images/smiling.png";});
        synthesis.speak(utterance);
    }
  }

  button.addEventListener("click", sayText);

}