// MAKE RIGHT SIDEBAR STICKS AFTER SCROLLING
window.onscroll = function () { stickSidebar() };

let sidebar = document.querySelector(".note__sidebar");
let sticky = sidebar.offsetTop;

function stickSidebar() {
    if (window.pageYOffset >= sticky) {
        sidebar.classList.add("sticky")
    } else {
        sidebar.classList.remove("sticky");
    }
}