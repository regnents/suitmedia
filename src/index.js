const emailField = document.getElementById("emailField")
const submitButton = document.getElementById("submitButton")
const slidesTestButton = document.getElementById("slidesTestButton")
const slides = document.getElementsByClassName("slides")

const activateSlide = (n) => {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slides[n].style.display = "block"
}

let slideActive = 0
activateSlide(slideActive)

emailField.onchange = function() {
    const emailRegex = new RegExp(/.*@.*\..*/i)
    const emailValue = emailField.value
    console.log(emailValue)
    if (emailRegex.test(emailValue)) {
        console.log("yes")
    }
}

slidesTestButton.onclick = () => {
    slideActive += 1
    console.log(slideActive)
    if (slideActive >= slides.length) {
        slideActive = 0
    }
    activateSlide(slideActive)

}

submitButton.onsubmit = (event) => {
    event.preventDefault()
}