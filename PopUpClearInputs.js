//  validation successful

const DIPSLAY_NONE = "none";
const inputsOriginColor = "#ffffff";
const validationSuccessfulText = "Thank you for your reservation, we call you back soon";

function clearInputs() {


    messagePopUp.style.display = DIPSLAY_NONE;

    makeOrderBtn.style.display = DIPSLAY_NONE;
    let inputsBlokcFirst = document.getElementById("inputsBlokcFirst");
    inputsBlokcFirst.style.display = DIPSLAY_NONE;

    let inputsBlokcSecond = document.getElementById("inputsBlokcSecond");
    inputsBlokcSecond.style.display = DIPSLAY_NONE;

    let reservation__text = document.getElementById("reservation__text");
    reservation__text.innerHTML = validationSuccessfulText + ", " + namePopUp.value + ".";
    reservation__text.classList.add("reservation__text__order");

    let message__title = document.getElementById("message__title");
    message__title.style.display = DIPSLAY_NONE;
}


//  clear inputs  event

namePopUp.onclick = function (event) {
    namePopUp.style.backgroundColor = inputsOriginColor;
    namePopUp.value = "";
};

familyNamePopUp.onclick = function (event) {
    familyNamePopUp.style.backgroundColor = inputsOriginColor;
    familyNamePopUp.value = "";
};


phonePopUp.onclick = function (event) {

    phonePopUp.style.backgroundColor = inputsOriginColor;
    phonePopUp.value = "";
};

dayPopUp.onclick = function (event) {
    dayPopUp.style.backgroundColor = inputsOriginColor;
};

timePopUp.onclick = function (event) {
    timePopUp.style.backgroundColor = inputsOriginColor;
};

guestsPopUp.onclick = function (event) {
    guestsPopUp.style.backgroundColor = inputsOriginColor;
};