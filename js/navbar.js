let burgerBtn;
let burgerActive = false;

let navbarMenu;

const toggleNavbarMenu = () => {
    if(burgerActive) {
        burgerActive = false;
        burgerBtn.classList.remove("is-active");
        navbarMenu.classList.remove("is-active");
    }
    else{
        burgerActive = true;
        burgerBtn.classList.add("is-active");
        navbarMenu.classList.add("is-active");
    }
};

window.onresize = () => {
    if(window.innerWidth > 1024){
        burgerActive = false;
        burgerBtn.classList.remove("is-active");
        navbarMenu.classList.remove("is-active");
    }
};

window.addEventListener("load", () => {
    burgerBtn = document.querySelector(".navbar-burger");
    navbarMenu = document.querySelector(".navbar-menu");
    burgerBtn.onclick = toggleNavbarMenu;
})