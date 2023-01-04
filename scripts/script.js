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

function copyCode(button) {
    // Get the code element
    var codeblock = button.closest('.codeblock button').nextElementSibling;

    // Select the text
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(codeblock);
    selection.removeAllRanges();
    selection.addRange(range);

    // Copy the text
    document.execCommand('copy');

    // Deselect the text
    selection.removeAllRanges();
    
    button.textContent = 'Copied!'

    setTimeout(function() {
        button.textContent = 'Copy';
      }, 1800);
}