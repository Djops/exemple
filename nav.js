
    //  nav

    let menuItem = document.getElementById("menu__dispaly-block")
    let menuToggle = document.getElementById("menu__toggle");


    menuToggle.addEventListener("click", function () {
        if (menuItem.style.display != "block") {
            menuItem.style.display = "block"
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