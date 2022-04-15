const buttonDailyClick = document.querySelector(".generateDailyButton");
const buttonVaxClick = document.querySelector(".generateVaxButton");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
buttonDailyClick.addEventListener('click', function() {getName("Daily");});
buttonVaxClick.addEventListener('click', function () {getName("Vax");});



function isEmpty(str) {
    return !str.trim().length;
}

function getName(typeOfScreen) {
    if (!isEmpty(firstName.value) || !isEmpty(lastName.value)){
        if (typeOfScreen === "Daily") {
            location.replace("/dailyscreener.html");
        } else if (typeOfScreen === "Vax") {
            location.replace("/vaxpass.html");
        };
        const fullName = `${firstName.value} ${lastName.value}`;
        localStorage.setItem("full name", fullName);
    }
    else {
        if (typeof localStorage.getItem("full name") != "undefined") {
            if (typeOfScreen === "Daily") {
                location.replace("/dailyscreener.html");
            } else if (typeOfScreen === "Vax") {
                location.replace("/vaxpass.html");
            };
        }
        else {
            alert("must input a value");
        };
    };
    
};
