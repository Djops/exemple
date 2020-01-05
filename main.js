

window.addEventListener('DOMContentLoaded', function () {


    //  nav

    let menuItem = document.getElementById("menu__dispaly-block")
    let menuToggle = document.getElementById("menu__toggle");


    menuToggle.addEventListener("click", function () {
        if (menuItem.style.display != "block") {
            menuItem.style.display = "block"
            console.log("j")
        } else if (menuItem.style.display = "block") {
            menuItem.style.display = "none"
        }
    });

    window.addEventListener('resize', function () {
        if (document.documentElement.clientWidth > 600) {
            menuItem.style.display = "block"
        } else if (document.documentElement.clientWidth < 617) {
            menuItem.style.display = "none"
        }
    });




    //  PopUp window "book your table btn"



    let displayOfferTitle = document.getElementById("title__heading");
    let displayOffetTitleDesc = document.getElementById("title__desc");
    let orderTableBg = document.getElementById("orderTableBg");
    let closePopUp = document.getElementById("closePopUp");
    let bookTableBtn = document.getElementById("bookTableBtn")

    // Open PopUp Window

    bookTableBtn.addEventListener("click", function () {
        orderTableBg.style.opacity = "0.9";
        displayOfferTitle.style.opacity = "0";
        displayOffetTitleDesc.style.opacity = "0";
    })

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


    // PopUp Window Clint Data

    let makeOrderBtn = document.getElementById("makeOrderBtn");
    let namePopUp = document.getElementById("namePopUp");
    let familyNamePopUp = document.getElementById("familyNamePopUp");
    let phonePopUp = document.getElementById("phonePopUp");
    let dayPopUp = document.getElementById("dayPopUp");
    let timePopUp = document.getElementById("timePopUp");
    let guestsPopUp = document.getElementById("guestsPopUp");
    let messagePopUp = document.getElementById("messagePopUp");
    let inputWrapper = document.querySelectorAll(".inputs__wrapper > input"); // eto dlia pobtornogo klika 



    //  clear inputs 

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




    //  Make an Order Btn

    makeOrderBtn.addEventListener("click", () => {



        // dayPopUp check

        function dayPopUpCheck(dayResult) {

            if (dayPopUp[0].value == dayPopUp.value) {
                dayPopUp.style.backgroundColor = "red"
                dayResult = false;
                return dayResult;
            } else {
                dayResult = true;
                return dayResult;
            }


        }

        dayPopUpCheck()

        // timePopUp check

        function timePopUpCheck(timeResult) {

            if (timePopUp[0].value == timePopUp.value) {
                timePopUp.style.backgroundColor = "red"
                timeResult = false;
                return timeResult;
            } else {
                timeResult = true;
                return timeResult;
            }


        }

        timePopUpCheck()


        // day check

        function guestsPopUpCheck(guestsResult) {

            if (guestsPopUp[0].value == guestsPopUp.value) {
                guestsPopUp.style.backgroundColor = "red"
                guestsResult = false;
                return guestsResult;
            } else {
                guestsResult = true;
                return guestsResult;
            }


        }

        guestsPopUpCheck();




        // name check

        function namePopUpCheck(nameResult) {
            if (namePopUp.value == "" || namePopUp.value == "Enter your name") {
                namePopUp.style.backgroundColor = "#ff1c1c";
                namePopUp.value = "Enter your name";
                nameResult = false;
                return nameResult;
            } else if (!namePopUp.value.match(/^[а-яa-z]+$/i)) {
                namePopUp.value = "onely text";
                namePopUp.style.backgroundColor = "#ff1c1c";
                nameResult = false;
                return nameResult;
            } else {
                let namePopUpValue = namePopUp.value;
                namePopUp.value = namePopUpValue;
                nameResult = true;
                return nameResult;
            }
        }

        namePopUpCheck()

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

        familyNameCheck()

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

        phoneNumberCheck()


        if (namePopUpCheck() == true) {
            namePopUp.style.color = "5c5c5c";
            namePopUp.style.backgroundColor = "#87f78c";
        } else {
            namePopUpCheck()
        }

        if (familyNameCheck() == true) {
            familyNamePopUp.style.color = "5c5c5c";
            familyNamePopUp.style.backgroundColor = "#87f78c";
        } else {
            familyNameCheck()
        }

        if (phoneNumberCheck() == true) {
            phonePopUp.style.color = "5c5c5c";
            phonePopUp.style.backgroundColor = "#87f78c";
        } else {
            phoneNumberCheck()
        }




        if (namePopUpCheck() == true &&
            familyNameCheck() == true &&
            phoneNumberCheck() == true &&
            dayPopUpCheck() == true &&
            timePopUpCheck() == true &&
            guestsPopUpCheck() == true) {


            let orderName = namePopUp.value;
            let orderFamilyName = familyNamePopUp.value;
            let orderPhone = phonePopUp.value;
            let orderDay = dayPopUp.value;
            let orderTime = timePopUp.value;
            let orderGuests = guestsPopUp.value;
            let orderMessage = messagePopUp.value;


            let orderUserData = {
                "name": orderName,
                "familyName": orderFamilyName,
                "phone": orderPhone,
                "day": orderDay,
                "time": orderTime,
                "guests": orderGuests,
                "message": orderMessage
            }


            // close popUpWindow 

            function clearInputs() {


                messagePopUp.style.display = "none";

                makeOrderBtn.style.display = "none";
                let inputsBlokcFirst = document.getElementById("inputsBlokcFirst");
                inputsBlokcFirst.style.display = "none";

                let inputsBlokcSecond = document.getElementById("inputsBlokcSecond");
                inputsBlokcSecond.style.display = "none";

                let reservation__text = document.getElementById("reservation__text");
                reservation__text.innerHTML = "Thank you for your reservation, we call you back soon " + namePopUp.value + ".";
                reservation__text.classList.add("reservation__text__order");

                let message__title = document.getElementById("message__title");
                message__title.style.display = "none";
            }


            clearInputs()


            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'some.php');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send('param=' + JSON.stringify(orderUserData));
            xhr.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        console.log(xhr.responseText);
                    }
                    else {
                        // let body = document.getElementById("body");
                        // body.classList.add("body");

                        // let bodyWrappc = document.getElementById("bodyWrappc");
                        // bodyWrappc.classList.add("bodyWrappc")

                    }
                }
            };

        } else {
            console.log("No")
        }

    })


    //  gallery


    let carousel = document.querySelector(".slider-item");
    carousel.style.backgroundImage = "url('img/carusel/BgPas.jpg')";

    let bgImageMas = ["url('img/carusel/fourDish.jpg')", "url('img/carusel/BgOne.jpg')", "url('img/carusel/fourDish.jpg')", "url('img/carusel/BgPas.jpg')", "url('img/carusel/BgOne.jpg')", "url('img/carusel/fourDish.jpg')", "url('img/carusel/fourDish.jpg')"];

    var timerIdd = setTimeout(caruselAuto, 3000);

    function caruselAuto() {
        clearTimeout(timerIdd);
        let bgImageMasAdd = [];

        for (let i = 0; i < bgImageMas.length; i++) {

            bgImageMasAdd.push(() => carousel.style.backgroundImage = bgImageMas[i]);
        }

        function carouselCycle() {
            bgImageMasAdd.forEach((fn, i) => {
                setTimeout(fn, i * 5000);
            });

            let caunt = bgImageMas.length * 5000;

            let reCycleCarusel = setTimeout(function () {
                carouselCycle()
            }, caunt);

        }
        carouselCycle()
    }




    // carousel scroll effect

    window.addEventListener('scroll', () => {
        if (scrollY < 300) {

            carousel.style.backgroundPositionY = -scrollY - 30 + "px";

        } else if (scrollY >= 200) {
            return false;
        }

    });

    // Today Special scroll effect

    window.addEventListener('scroll', () => {

        let bgSpecialSection = document.getElementById("special");
        let foodOneTable = document.getElementById("foodOne");
        let foodTwoTable = document.getElementById("foodTwo");

        foodOneTable.style.marginTop = 0 + "px";
        foodTwoTable.style.marginTop = 0 + "px";
        bgSpecialSection.style.backgroundSize = 2100 + "px";
        if (scrollY < 650) {

            foodOneTable.style.marginTop = 300 + "px";
            foodTwoTable.style.marginTop = 300 + "px";
            bgSpecialSection.style.backgroundSize = 2000 + "px";

        } else if (scrollY >= 100) {
            return false;
        }
    })


});






