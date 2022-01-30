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

//BAGGRUNDSFARVE PÅ AKTUEL DAG
let sunday = document.getElementById("sunday");
let saturday = document.getElementById("saturday");

if ((day = [0])) {
  sunday.style.backgroundColor = "#FFFFB8";
}

// if ((day = [5])) {
//   saturday.style.backgroundColor = "#FFFFB8";
// }

let vacuum = document.getElementById("vacuum");

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
