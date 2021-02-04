const welcome = document.querySelector("#welcome")

const backgroundMain = document.querySelector(".background-main")

backgroundMain.classList.add("background-display")

const homepage = document.querySelector(".homepage")

homepage.classList.add("background-hide")

welcome.addEventListener("click", (e) => {
    e.preventDefault()

    backgroundMain.classList.add("background-hide")
    backgroundMain.classList.remove("background-display")

    homepage.classList.remove("background-hide")
    homepage.classList.add("background-display")

}) 