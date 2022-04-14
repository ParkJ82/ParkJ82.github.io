const buttonClick = document.querySelector(".nameSubmit");
const nameGenerator = document.getElementById("inputtedName");
buttonClick.addEventListener('click', getName);

function getName() {
    location.replace("/dailyscreener.html")
    sessionStorage.setItem("full name", nameGenerator.value);
};
