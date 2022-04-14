const buttonClick = document.querySelector(".generateButton");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
buttonClick.addEventListener('click', getName);

function getName() {
    location.replace("C:/Users/qkrwj/Desktop/Computer%20Science/Chrome%20Extension/daily%20screener/dailyscreener.html");
    const fullName = `${firstName.value} ${lastName.value}`
    sessionStorage.setItem("full name", fullName);
};
