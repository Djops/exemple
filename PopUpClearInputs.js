//  validation successful

function clearInputs() {


    messagePopUp.style.display = "none";

    makeOrderBtn.style.display = "none";
    let inputsBlokcFirst = document.getElementById("inputsBlokcFirst");
    inputsBlokcFirst.style.display = "none";

    let inputsBlokcSecond = document.getElementById("inputsBlokcSecond");
    inputsBlokcSecond.style.display = "none";

    let reservation__text = document.getElementById("reservation__text");
    reservation__text.innerHTML = "Thank you for your reservation, we call you back soon" + namePopUp.value + ".";
    reservation__text.classList.add("reservation__text__order");

    let message__title = document.getElementById("message__title");
    message__title.style.display = "none";
}


//  clear inputs  event

namePopUp.onclick = function (event) {
    namePopUp.style.backgroundColor = "#ffffff";
    namePopUp.value = "";
};

familyNamePopUp.onclick = function (event) {
    familyNamePopUp.style.backgroundColor = "#ffffff";
    familyNamePopUp.value = "";
};


phonePopUp.onclick = function (event) {

    phonePopUp.style.backgroundColor = "#ffffff";
    phonePopUp.value = "";
};

dayPopUp.onclick = function (event) {
    dayPopUp.style.backgroundColor = "#ffffff";
};

timePopUp.onclick = function (event) {
    timePopUp.style.backgroundColor = "#ffffff";
};

guestsPopUp.onclick = function (event) {
    guestsPopUp.style.backgroundColor = "#ffffff";
};