const nameSelector = document.querySelector(".realName");
const dateSelector = document.querySelector(".realDate");

var yourName = sessionStorage.getItem("full name");

let today = new Date();
today = today.toDateString().split(" ");
today.shift();
today = today.join(" ");

nameSelector.textContent = yourName;
dateSelector.textContent = today;
