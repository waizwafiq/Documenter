
// Check if the copyright button has been altered

function checkCopyright() {
    const flag1 = document.querySelector(".credits") == null || document.querySelector('.credits p a') == null
    const flag2 = document.querySelector('.credits p a').innerHTML != 'Waiz Wafiq' || document.querySelector('div.footer') == null;
    // console.log(document.querySelector('.a'))
    console.log(flag1, flag2)
    if (flag1 || flag2) {
        // If the notice is not present, create a new element
        const notice = document.createElement("p");
        notice.style.textAlign = 'center'
        notice.classList.add("credits");
        notice.innerHTML = "Developed by Waiz Wafiq";

        // Insert the notice into the footer
        const footer = document.querySelector(".footer");
        footer.appendChild(notice);
        window.location.assign('https://www.google.com')
    }

    // const creds = document.querySelector('.credits p a')
    // console.log(creds.innerHTML)
}

window.addEventListener("load", function () {
    checkCopyright();
});

// MAKE RIGHT SIDEBAR STICKS AFTER SCROLLING
window.onscroll = function () { stickSidebar() };

let sidebar = document.querySelector(".note__sidebar");
let sticky = sidebar.offsetTop;
let footer = document.querySelector(".navigator")
let sidebar_h = sidebar.offsetHeight;

function stickSidebar() {
    if (window.pageYOffset >= sticky) {
        sidebar.classList.add("sticky")
    } else {
        sidebar.classList.remove("sticky");
    }

    let to_bottom_flag = window.pageYOffset + sidebar.offsetHeight >= footer.offsetTop;

    if (to_bottom_flag) {
        sidebar.classList.remove("sticky")
        sidebar.classList.add("to-bottom");
    }

    // console.log(sidebar.classList.contains('to-bottom'), window.pageYOffset < footer.offsetTop-sidebar_h, to_bottom_flag)
    // console.log(sidebar.offsetHeight, window.pageYOffset, footer.offsetTop, sidebar_h)
    // console.log("-----------------------")


    if (sidebar.classList.contains('to-bottom') && window.pageYOffset < footer.offsetTop - sidebar_h) {
        sidebar.classList.add("sticky")
        sidebar.classList.remove("to-bottom");
    }
}

// COPYING THE CODE INSIDE THE CODEBLOCK
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

    setTimeout(function () {
        button.textContent = 'Copy';
    }, 1800);
}


// Color the "On This Page" tab when the topic is in view
const links = document.querySelectorAll(".toc__listitem")
const topics = document.querySelectorAll(".note__body > div h2, .note__body > div h3")

function currentTopic() {

    const scrollPos = window.scrollY; // current scroll position
    for (const topic of topics) {

        //get the div of the section (to measure height)
        const topicSectDiv = topic.parentElement

        // get the top position of the topic/subtopic
        const topicPos = topicSectDiv.offsetTop;
        const topicBottom = (topicPos + topicSectDiv.offsetHeight)

        if (scrollPos > topicPos - 100 && scrollPos < topicBottom - 80) {
            // if the topic is in view
            const id = topic.getAttribute("id")
            const link = document.querySelector(`a[href="#${id}"]`).parentElement
            link.classList.add("active")
        } else {
            const id = topic.getAttribute("id")
            const link = document.querySelector(`a[href="#${id}"]`).parentElement
            link.classList.remove("active");
        }
    }
}
window.addEventListener("scroll", currentTopic);

