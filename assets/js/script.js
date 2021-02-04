// JavaScript File to show and hide the into gif

// Consts to access the divs
const welcome = document.querySelector("#welcome")
const backgroundMain = document.querySelector(".background-main")
const homepage = document.querySelector(".homepage")

// Add the classes to show/hide
backgroundMain.classList.add("background-display")
homepage.classList.add("background-hide")

// Onclick event listener to hide the gif when clicked, and show the rest of the page
welcome.addEventListener("click", (e) => {
    e.preventDefault()

    // Add/Remove Classes
    backgroundMain.classList.add("background-hide")
    backgroundMain.classList.remove("background-display")

    // Add/Remove Classes
    homepage.classList.remove("background-hide")
    homepage.classList.add("background-display")

})

// End of JavaScript