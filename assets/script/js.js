//DATE AND TIME

let today = new Date();
let date =
  today.getFullYear() + "-" + today.getDate() + "-" + today.getMonth() + 1;
date.toString();
document.getElementById("date").innerHTML = date.toString();
var span = document.getElementById("span");

//WEEKNUMBER
let weeknumber = document.getElementById("weeknumber");
currentdate = new Date();
var oneJan = new Date(currentdate.getFullYear(), 0, 1);
var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
var result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
console.log(
  `The week number of the current date (${currentdate}) is ${result}.`
);

weeknumber.innerHTML = "Uge " + result;

//UGEDAG
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("weekday").innerHTML = day;

//KLOKKESLET

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent =
    ("0" + h).substr(-2) +
    ":" +
    ("0" + m).substr(-2) +
    ":" +
    ("0" + s).substr(-2);
}

setInterval(time, 1000);

const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

//BESKED PÅ BESTEMT TIDSPUNKT
// day = 1;
// if (1 < 0) {
//   document.getElementById("important").innerHTML =
//     "HUSK: Alt udetøj med i skole/børnehave.";
// }

let hilsen = document.getElementById("goodday");
let sun = document.getElementById("layer_sun");
let h = d.getHours();
if (h < 9) {
  hilsen.innerHTML = "Godmorgen!";
  sun.style.visibility = "visible";
}

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();

//MOUSEOVER-EVENTS

//PCR-EVENT

// let pcr = document.getElementById("pcr");

// pcr.addEventListener("mouseover", function () {
//   document.getElementById("myPopup").classList.toggle("show");
// });

//FODBOLD-EVENT

let soccer = document.getElementById("soccer");

soccer.addEventListener("mouseover", function () {
  document.getElementById("fodbold").classList.toggle("show");
});

//GYMNASTIK-EVENT

let gymnastik = document.getElementById("gym");

gymnastik.addEventListener("mouseover", function () {
  document.getElementById("gymnastik").classList.toggle("show");
});

//IDRÆT-EVENT

let schoolgym = document.getElementById("schoolgymdiv");

schoolgym.addEventListener("mouseover", function () {
  document.getElementById("schoolgym").classList.toggle("show");
});

//BIBLIOTEKS-EVENT

let library = document.getElementById("librarydiv");

library.addEventListener("mouseover", function () {
  document.getElementById("library").classList.toggle("show");
});

//RADIO

let audio = document.getElementById("audio");
let checkbox = document.getElementById("checkbox");

let button = document.querySelector(".switch");
button.addEventListener("click", function () {
  if (!checkbox.checked) {
    audio.pause();
  } else {
    audio.play();
  }
});
