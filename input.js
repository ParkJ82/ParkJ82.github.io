const buttonClick = document.querySelector(".nameSubmit");
const nameGenerator = document.getElementById("inputtedName");
buttonClick.addEventListener('click', getName);

function getName() {
    location.replace("C:/Users/qkrwj/Desktop/Computer%20Science/Chrome%20Extension/daily%20screener/dailyscreener.html")
    sessionStorage.setItem("full name", nameGenerator.value);
};