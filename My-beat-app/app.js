const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
const allPads = document.querySelectorAll(".pad");
const play = document.querySelector(".play");

const pads_1 = document.querySelectorAll(".pad-1");
const pads_2 = document.querySelectorAll(".pad-2");
const pads_3 = document.querySelectorAll(".pad-3");
const pads_4 = document.querySelectorAll(".pad-4");

const kickAudio = document.querySelector(".kick-sound");
const snareAudio = document.querySelector(".snare-sound");
const clapAudio = document.querySelector(".clap-sound");
const hihatAudio = document.querySelector(".hihat-sound");

const firstPads = document.querySelectorAll(".p0");
const secondPads = document.querySelectorAll(".p1");
const thirdPads = document.querySelectorAll(".p2");
const forthPads = document.querySelectorAll(".p3");
const fifthPads = document.querySelectorAll(".p4");
const sixthPads = document.querySelectorAll(".p5");
const seventhPads = document.querySelectorAll(".p6");
const eightsPads = document.querySelectorAll(".p7");

output.innerText = "bpm: " + slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerText = "bpm: " + this.value;
};

//give the class of active on click
allPads.forEach((pad) => {
  pad.addEventListener("click", () => {
    pad.classList.toggle("active");
  });
});

//change color of pads on click
pads_1.forEach((pad) => {
  pad.addEventListener("click", () => {
    pad.classList.toggle("active-1");
  });
});
pads_2.forEach((pad) => {
  pad.addEventListener("click", () => {
    pad.classList.toggle("active-2");
  });
});
pads_3.forEach((pad) => {
  pad.addEventListener("click", () => {
    pad.classList.toggle("active-3");
  });
});
pads_4.forEach((pad) => {
  pad.addEventListener("click", () => {
    pad.classList.toggle("active-4");
  });
});

play.addEventListener("click", start);
