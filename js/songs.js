const music = document.querySelector('#music');

play();

function play() {
  music.play();
};

function stop() {
  music.stop();
};

function increaseVolume() {
  if (music.volume < 1) music.volume += 0.1;
}

function decreaseVolume() {
  if (music.volume > 0) music.volume -= 0.1;
}

function mute() {
  if (music.muted) {
    music.muted = false;
  } else {
    music.muted = true;
  }
}

