

window.addEventListener('DOMContentLoaded', function () {

    //  gallery

    let carousel = document.querySelector(".slider-item");
    carousel.style.backgroundImage = "url('/img/carusel/BgPas.jpg')";

    let bgImageMas = ["url('/img/carusel/fourDish.jpg')", "url('/img/carusel/BgOne.jpg')", "url('/img/carusel/fourDish.jpg')", "url('/img/carusel/BgPas.jpg')", "url('img/carusel/BgOne.jpg')", "url('img/carusel/fourDish.jpg')", "url('img/carusel/fourDish.jpg')"];

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


    let bgSpecialSection = document.getElementById("special");
    let foodOneTable = document.getElementById("foodOne");
    let foodTwoTable = document.getElementById("foodTwo");



    window.addEventListener('scroll', () => {

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


    //  PopUp window "book your table btn"

    let displayOfferTitle = document.getElementById("title__heading");
    let displayOffetTitleDesc = document.getElementById("title__desc");
    let orderTableBg = document.getElementById("orderTableBg");
    let bookTableBtn = document.getElementById("bookTableBtn")

    // Open PopUp Window

    bookTableBtn.addEventListener("click", function () {
        orderTableBg.style.opacity = "0.9";
        displayOfferTitle.style.opacity = "0";
        displayOffetTitleDesc.style.opacity = "0";
    })


    


    //  Make an Order Btn

    let makeOrderBtn = document.getElementById("makeOrderBtn");
    let namePopUp = document.getElementById("namePopUp");
    let familyNamePopUp = document.getElementById("familyNamePopUp");
    let phonePopUp = document.getElementById("phonePopUp");
    let dayPopUp = document.getElementById("dayPopUp");
    let timePopUp = document.getElementById("timePopUp");
    let guestsPopUp = document.getElementById("guestsPopUp");
    let messagePopUp = document.getElementById("messagePopUp");

    const ifTrueColor = "black";
    const ifTrueColorBgc = "#87f78c";


    makeOrderBtn.addEventListener("click", () => {

        let namePopUProof = namePopUpCheck();
        let dayPopUpProof = dayPopUpCheck();
        let timePopUpProof = timePopUpCheck();
        let guestsPopUpProog = guestsPopUpCheck();
        let familyNameProof = familyNameCheck();
        let phoneNumberProof = phoneNumberCheck();



        if (namePopUProof == true) {
            namePopUp.style.color = ifTrueColor;
            namePopUp.style.backgroundColor = ifTrueColorBgc;
        }

        if (familyNameProof == true) {
            familyNamePopUp.style.color = ifTrueColor;
            familyNamePopUp.style.backgroundColor = ifTrueColorBgc;
        }

        if (phoneNumberProof == true) {
            phonePopUp.style.color = ifTrueColor;
            phonePopUp.style.backgroundColor = ifTrueColorBgc;
        }

        if (namePopUProof == true &&
            dayPopUpProof == true &&
            familyNameProof == true &&
            timePopUpProof == true &&
            guestsPopUpProog == true &&
            phoneNumberProof == true) {

            let orderUserData = {
                "name": namePopUp.value,
                "familyName": familyNamePopUp.value,
                "phone": phonePopUp.value,
                "day": dayPopUp.value,
                "time": timePopUp.value,
                "guests": guestsPopUp.value,
                "message": messagePopUp.value
            }

            //  close popUpWindow 
            //  PopUpClearInputs.js
            clearInputs();


            sendOrder();

        } else {
            console.log("No")
        }
    })
});





//  send order user data



function sendOrder(orderUserData) {
    console.log(orderUserData);   //  он невидит дату  TODO
    fetch("some.php", {
        method: "post",
        body: orderUserData
    }).then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);
    }).catch(function (error) {
        console.log(error);
    });
};



function initMap(){
    let taNg = { lat:32.0631459, lng:34.7683656};
  let mapIpa = new google.maps.Map(
      document.getElementById("mapIpa"),{zoom: 16, center:taNg}
  );
  
}
