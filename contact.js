// function initMap(){
//     let taNg = { lat:32.0631459, lng:34.7683656};
//   let mapIpa = new google.maps.Map(
//       document.getElementById("mapIpa"),{zoom: 16, center:taNg}
//   );
  
// }

window.addEventListener('DOMContentLoaded', function () {

    //  PopUp window "book your table btn"

  
    let bookTableBtn = document.getElementById("bookTableBtn")

    // Open PopUp Window

    bookTableBtn.addEventListener("click", function () {
        orderTableBg.style.opacity = "0.9";
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



    // map IPA

 



});

// 32.0631459,34.7683656