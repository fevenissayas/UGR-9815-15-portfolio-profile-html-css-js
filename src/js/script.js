function toggleMenu() {
    let getMenu = document.querySelector("#myLinks");
    getMenu.classList.toggle("hamburger");
    }

    let getHamburger = document.querySelector("#toggle-bar");

    getHamburger.addEventListener("click", toggleMenu);    