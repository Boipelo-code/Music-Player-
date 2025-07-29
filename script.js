const playBtn = document.getElementById("play-btn");
const audio = document.getElementById("audio");
const volumeSlider = document.getElementById("volume");
const progress = document.getElementById("progress");

let isPlaying = false;

// Play/Pause toggle
playBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    playBtn.textContent = "Play";
  } else {
    audio.play();
    playBtn.textContent = "Pause";
  }
  isPlaying = !isPlaying;
});

// Volume control
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

// Update progress bar as song plays
audio.addEventListener("timeupdate", () => {
  progress.max = audio.duration;
  progress.value = audio.currentTime;
});

// Seek in audio when user changes progress bar
progress.addEventListener("input", () => {
  audio.currentTime = progress.value;
});
