    // Close PopUp Window

    closePopUp.addEventListener("click", () => {
        orderTableBg.style.opacity = "0";
        displayOfferTitle.style.opacity = "1";
        displayOffetTitleDesc.style.opacity = "1";

        // display Order inputs 

        function displayInputs() {

            message__title.style.display = "block";
            messagePopUp.style.display = "block";
            makeOrderBtn.style.display = "block";
            inputsBlokcFirst.style.display = "block";
            inputsBlokcSecond.style.display = "block";
            reservation__text.innerHTML = " You can book a table in our restaurant via special online-form. Just apply few important details  - desirable date, time, number of guests and your contacts. The seats at the bar and on the terrace are reserved for walk-ins only.  To reserve directly via phone, using following number: 0504501645";
            reservation__text.classList.remove("reservation__text__order");
        }

        displayInputs()

        // clear PopUp Clint Data

        function clearPopUpInputs() {

            namePopUp.style.backgroundColor = "#ffffff";
            namePopUp.readOnly = false;
            namePopUp.value = ""

            familyNamePopUp.style.backgroundColor = "#ffffff";
            familyNamePopUp.readOnly = false;
            familyNamePopUp.value = ""

            phonePopUp.style.backgroundColor = "#ffffff";
            phonePopUp.readOnly = false;
            phonePopUp.value = ""

            messagePopUp.value = "";

            let orig_default = 0;
            dayPopUp.selectedIndex = orig_default;
            timePopUp.selectedIndex = orig_default;
            guestsPopUp.selectedIndex = orig_default;

            dayPopUp.style.backgroundColor = "#ffffff"
            timePopUp.style.backgroundColor = "#ffffff"
            guestsPopUp.style.backgroundColor = "#ffffff"

        }


        clearPopUpInputs()

    })