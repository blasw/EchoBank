
const menuBtn = document.querySelector(".hamburger");
const burgerMenu = document.querySelector(".burger-menu");
let active = false;

menuBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(active){
        menuBtn.classList.remove("hamburgerChecked");
        burgerMenu.style.left = "-300px";
        active = !active;
    } else {
        menuBtn.classList.add("hamburgerChecked");
        burgerMenu.style.left = "0";
        active = !active;
    }
})