window.onload = () => {
let button = document.querySelector("#btn");

// Functie voor berekening van BMI 
button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

/* Ghier vult de gebruiker zijn hoogte in*/
let height = parseInt(document
        .querySelector("#height").value);

/* hier vult de gebruiker zijn gewicht in*/
let weight = parseInt(document
        .querySelector("#weight").value);

let result = document.querySelector("#result");

// nakijken of de gebruiker een juiste waarde heeft gegeven of niet
if (height === "" || isNaN(height)) 
    result.innerHTML = "Provide a valid Height!";

else if (weight === "" || isNaN(weight)) 
    result.innerHTML = "Provide a valid Weight!";

// als beide waardes correct zijn word BMI berekend
else {

    // tot 2 getallen na de komma berekenen
    let bmi = (weight / ((height * height) 
                        / 10000)).toFixed(2);

    // deling van de BMI conditie
    if (bmi < 18.6) result.innerHTML =
        `Under Weight : <span>${bmi}</span>`;

    else if (bmi >= 18.6 && bmi < 24.9) 
        result.innerHTML = 
            `Normal : <span>${bmi}</span>`;

    else result.innerHTML =
        `Over Weight : <span>${bmi}</span>`;
}
}
