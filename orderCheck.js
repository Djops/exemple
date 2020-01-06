// name check

function namePopUpCheck() {
    if (namePopUp.value == "" || namePopUp.value == "Enter your name") {
        namePopUp.style.backgroundColor = "#ff1c1c";
        namePopUp.value = "Enter your name";
        return false;
    }

    if (!namePopUp.value.match(/^[а-яa-z]+$/i)) {
        namePopUp.value = "onely text";
        namePopUp.style.backgroundColor = "#ff1c1c";
        return false;
    }
    return true;
}



// family name check

function familyNameCheck(familyNameResult) {


    if (familyNamePopUp.value == "" || familyNamePopUp.value == "Enter your family name") {
        familyNamePopUp.style.backgroundColor = "#ff1c1c";
        familyNamePopUp.value = "Enter your family name";
        familyNameResult = false;
        return familyNameResult;

    } else if (!familyNamePopUp.value.match(/^[а-яa-z]+$/i)) {
        familyNamePopUp.value = "onely text";
        familyNamePopUp.style.backgroundColor = "#ff1c1c";
        familyNameResult = false;
        return familyNameResult;
    } else {
        let familyNameValue = familyNamePopUp.value;
        familyNamePopUp.value = familyNameValue;
        familyNameResult = true;
        return familyNameResult;
    }
}



// phoneNumber check 

function phoneNumberCheck(phoneResult) {
    if (phonePopUp.value == "") {
        phonePopUp.value = "Enter phone number";
        phonePopUp.style.backgroundColor = "#ff1c1c";
        phonePopUp.style.color = "5c5c5c";
        phoneResult = false;
        return phoneResult;

    } else if (!phonePopUp.value.match(/^\d+$/)) {
        phonePopUp.value = "onely numbers";
        phonePopUp.style.backgroundColor = "#ff1c1c";
        phoneResult = false;
        return phoneResult;
    } else {
        let phoneNumberValue = phonePopUp.value;
        phonePopUp.value = phoneNumberValue;
        phoneResult = true;
        console.log(phoneResult)
        return phoneResult;

    }

}


// dayPopUp check

function dayPopUpCheck() {

    if (dayPopUp[0].value == dayPopUp.value) {
        dayPopUp.style.backgroundColor = "red";
        return false;
    }

    return true;
}



// timePopUp check

function timePopUpCheck() {

    if (timePopUp[0].value == timePopUp.value) {
        timePopUp.style.backgroundColor = "red";
        return false;
    }

    return true;
}



// guests check

function guestsPopUpCheck() {

    if (guestsPopUp[0].value == guestsPopUp.value) {
        guestsPopUp.style.backgroundColor = "red";
        return false;
    }

    return true;
}
