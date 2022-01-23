//DATE AND TIME

let today = new Date();
let date =
  today.getFullYear() + "-" + today.getDate() + "-" + today.getMonth() + 1;
date.toString();
document.getElementById("date").innerHTML = date.toString();
var span = document.getElementById("span");

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

//MOUSEOVER-EVENTS

//PCR-EVENT

let pcr = document.getElementById("pcr");

pcr.addEventListener("mouseover", function () {
  document.getElementById("myPopup").classList.toggle("show");
});

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
