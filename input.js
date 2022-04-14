const buttonClick = document.querySelector(".generateButton");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
buttonClick.addEventListener('click', getName);

function getName() {
    if (firstName.value != "" || lastName.value != ""){
        location.replace("/dailyscreener.html");
        const fullName = `${firstName.value} ${lastName.value}`
        localStorage.setItem("full name", fullName);
    }
    else {
        if (typeof localStorage.getItem("full name") != "undefined") {
            location.replace("/dailyscreener.html");
        }
        else {
            alert("must input a value");
        }
    };
    
};
