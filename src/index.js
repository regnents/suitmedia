const emailField = document.getElementById("emailField")
const submitButton = document.getElementById("submitButton")

emailField.onchange = function() {
    const emailRegex = new RegExp(/.*@.*\..*/i)
    const emailValue = emailField.value
    console.log(emailValue)
    if (emailRegex.test(emailValue)) {
        console.log("yes")
    }
}

submitButton.onsubmit = (event) => {
    event.preventDefault()
}