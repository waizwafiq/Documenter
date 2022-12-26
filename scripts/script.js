// MAKE RIGHT SIDEBAR STICKS AFTER SCROLLING
window.onscroll = function () { stickSidebar() };

let navbar = document.querySelector(".note__sidebar");
console.log("Element: " + navbar)
let sticky = navbar.offsetTop;

function stickSidebar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}