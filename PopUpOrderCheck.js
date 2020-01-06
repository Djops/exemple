const namePopUpValidation = "Enter your name";
const familyNamePopUpValidation = "Enter your family name";
const phonePopUpValidation = "Enter phone number";
const validationColor = "#fe0000";
const ifNumbers = "onely text";
const ifString = "onely numbers"



// name check

function namePopUpCheck() {
    if (namePopUp.value == "" || namePopUp.value == namePopUpValidation) {
        namePopUp.style.backgroundColor = validationColor;
        namePopUp.value = namePopUpValidation;
        return false;
    }

    if (!namePopUp.value.match(/^[а-яa-z]+$/i)) {
        namePopUp.value = ifNumbers;
        namePopUp.style.backgroundColor = validationColor;
        return false;
    }
    return true;
}



// family name check

function familyNameCheck(familyNameResult) {


    if (familyNamePopUp.value == "" || familyNamePopUp.value == familyNamePopUpValidation) {
        familyNamePopUp.style.backgroundColor = validationColor;
        familyNamePopUp.value = familyNamePopUpValidation;
        familyNameResult = false;
        return familyNameResult;

    }
    if (!familyNamePopUp.value.match(/^[а-яa-z]+$/i)) {
        familyNamePopUp.value = ifNumbers;
        familyNamePopUp.style.backgroundColor = validationColor;
        familyNameResult = false;
        return familyNameResult;
    }

    return true;
}



// phoneNumber check 

function phoneNumberCheck(phoneResult) {
    if (phonePopUp.value == "") {
        phonePopUp.value = phonePopUpValidation;
        phonePopUp.style.backgroundColor = validationColor;
        phoneResult = false;
        return phoneResult;

    }
    if (!phonePopUp.value.match(/^\d+$/)) {
        phonePopUp.value = ifString;
        phonePopUp.style.backgroundColor = validationColor;
        phoneResult = false;
        return phoneResult;
    }

    return true;

}


// dayPopUp check

function dayPopUpCheck() {

    if (dayPopUp[0].value == dayPopUp.value) {
        dayPopUp.style.backgroundColor = validationColor;
        return false;
    }
    return true;
}



// timePopUp check

function timePopUpCheck() {

    if (timePopUp[0].value == timePopUp.value) {
        timePopUp.style.backgroundColor = validationColor;
        return false;
    }
    return true;
}



// guests check

function guestsPopUpCheck() {

    if (guestsPopUp[0].value == guestsPopUp.value) {
        guestsPopUp.style.backgroundColor = validationColor;
        return false;
    }
    return true;
}
