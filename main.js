const nameSelector = document.querySelector(".realName");
const dateSelector = document.querySelector(".realDate");

var yourName = localStorage.getItem("full name");

let today = new Date();
today = today.toDateString().split(" ");
today.shift();
const month = today[0];
const day = today[1];
today[0] = day;
today[1] = month;
today = today.join(" ");

nameSelector.textContent = yourName;
dateSelector.textContent = today;
