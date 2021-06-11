const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
const allPads = document.querySelectorAll(".pad");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
let index = 0;

const pads_1 = document.querySelectorAll(".pad-1");
const pads_2 = document.querySelectorAll(".pad-2");
const pads_3 = document.querySelectorAll(".pad-3");
const pads_4 = document.querySelectorAll(".pad-4");

const kickAudio = document.querySelector(".kick-sound");
const snareAudio = document.querySelector(".snare-sound");
const clapAudio = document.querySelector(".clap-sound");
const hihatAudio = document.querySelector(".hihat-sound");

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

play.addEventListener("click", start_play);

function sequence() {
  const activeBars = document.querySelectorAll(`.p${index}`); //to loop through each bar

  //pad loop
  activeBars.forEach((bar) => {
    bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;

    if (bar.classList.contains("active")) {
      if (bar.classList.contains("kick-pad")) {
        kickAudio.currentTime = 0;
        kickAudio.play();
      }
      if (bar.classList.contains("snare-pad")) {
        snareAudio.currentTime = 0;
        snareAudio.play();
      }
      if (bar.classList.contains("hihat-pad")) {
        hihatAudio.currentTime = 0;

        hihatAudio.play();
      }
    }
  });
  index++;
  if (index == 8) {
    index = 0;
  }
}

isPlaying = false;
function start_play() {
  const tempo = (60 / slider.value) * 1000;

  if (!isPlaying) {
    isPlaying = setInterval(() => {
      sequence();
    }, tempo);
  }
}
