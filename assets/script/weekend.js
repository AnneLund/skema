// //DATE AND TIME

// let today = new Date();
// let date =
//   today.getFullYear() + "-" + today.getDate() + "-" + today.getMonth() + 1;

// document.getElementById("date").innerHTML = date.toString();

// var span = document.getElementById("span");

// function time() {
//   var d = new Date();
//   var s = d.getSeconds();
//   var m = d.getMinutes();
//   var h = d.getHours();
//   span.textContent =
//     ("0" + h).substr(-2) +
//     ":" +
//     ("0" + m).substr(-2) +
//     ":" +
//     ("0" + s).substr(-2);

//   date.toString();
// }

// setInterval(time, 1000);

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
