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

    setTimeout(function () {
        button.textContent = 'Copy';
    }, 1800);
}


// Color the "On This Page" tab when the topic is in view
const links = document.querySelectorAll(".toc__listitem")
const topics = document.querySelectorAll(".note__body > div h2, .note__body > div h3")

for (const i of topics)
    console.log(i.parentElement.offsetHeight)

function currentTopic() {

    const scrollPos = window.scrollY; // current scroll position
    
    for (const topic of topics) {

        //get the div of the section (to measure height)
        const topicSectDiv = topic.parentElement

        // get the top position of the topic/subtopic
        const topicPos = topicSectDiv.offsetTop;
        const topicBottom =  (topicPos + topicSectDiv.offsetHeight)

        if (scrollPos > topicPos - 100 && scrollPos < topicBottom - 80) {
            // if the topic is in view
            const id = topic.getAttribute("id")
            const link = document.querySelector(`a[href="#${id}"]`).parentElement
            link.classList.add("active")
            console.log('uwu')
        } else {
            const id = topic.getAttribute("id")
            const link = document.querySelector(`a[href="#${id}"]`).parentElement
            link.classList.remove("active");
        }
    }
}
window.addEventListener("scroll", currentTopic);