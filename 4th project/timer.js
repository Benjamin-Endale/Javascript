const playBtn = document.querySelector(".play");
const repeatBtn = document.querySelector(".repeat");
const counter = document.querySelector(".Counter");

const twodots = document.querySelector(".Twodots");

const y = twodots.outerHTML;
let hour = 0;
let hour1 = 0;
let minute = 0;
let minute1 = 0;
let second = 0;
let second1 = 0;

function timer() {
  second++;
  if (second == 10) {
    second1++;
    second = 0;
  }
  if (second1 === 6) {
    second = 0;
    second1 = 0;
    minute++;
  }
  if (minute == 10) {
    minute = 0;
    minute1++;
  }
  if (minute1 == 6) {
    minute = 0;
    minute1 = 0;
    hour++;
    if (hour == 10) {
      hour = 0;
      hour1++;
    }
  }
  counter.innerHTML = `${hour1}${hour}${y}${minute1}${minute}${y}${second1}${second}`;
}

let timerstatus = "stopped";
let timeinterval = null;

playBtn.addEventListener("click", function () {
  if (timerstatus == "stopped") {
    timeinterval = window.setInterval(timer, 1000);
    playBtn.innerHTML = '<i class="icons1 fa-solid fa-pause"></i>';
    timerstatus = "started";
  } else {
    window.clearInterval(timeinterval);
    playBtn.innerHTML = '<i class="icons1 fa-solid fa-play"></i>';
    timerstatus = "stopped";
  }
});

repeatBtn.addEventListener("click", function () {
  hour1 = 0;
  minute = 0;
  minute1 = 0;
  second1 = 0;
  second = 0;
  hour = 0;
  counter.innerHTML = `${hour1}${hour}${y}${minute1}${minute}${y}${second1}${second}`;
});
