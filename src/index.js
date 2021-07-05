const leftArrow = document.getElementById("arrowLeft");
const rightArrow = document.getElementById("arrowRight");
const nameField = document.getElementById("nameField");
const nameWarning = document.getElementById("nameWarning");
const emailField = document.getElementById("emailField");
const emailWarning = document.getElementById("emailWarning");
const messageField = document.getElementById("messageField");
const messageWarning = document.getElementById("messageWarning");
const submitButton = document.getElementById("submitButton");

const slides = document.getElementsByClassName("slides");

const activateSlide = (n) => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
};

const changeSlideActive = (n) => {
  slideActive += n;
  if (slideActive < 0) {
    slideActive = slides.length - 1;
  } else if (slideActive >= slides.length) {
    slideActive = 0;
  }
};

const isFieldEmpty = (teks) => {
  console.log("masuk func");
  return !teks || (teks = "");
};

const isEmailValid = (teks) => {
  const emailRegex = new RegExp(/.*@.*\..*/i);
  return emailRegex.test(teks);
};

let slideActive = 0;
activateSlide(slideActive);

nameField.onblur = () => {
  console.log("yes");
  if (isFieldEmpty(nameField.value)) {
    nameField.style.borderColor = "red";
    nameWarning.style.display = "block";
  } else {
    nameField.style.borderColor = "black";
    nameWarning.style.display = "none";
  }
};

emailField.onblur = () => {
  if (!isEmailValid(emailField.value)) {
    emailField.style.borderColor = "red";
    emailWarning.style.display = "block";
  } else {
    emailField.style.borderColor = "black";
    emailWarning.style.display = "none";
  }
};

messageField.onblur = () => {
  if (isFieldEmpty(messageField.value)) {
    messageField.style.borderColor = "red";
    messageWarning.style.display = "block";
  } else {
    messageField.style.borderColor = "black";
    messageWarning.style.display = "none";
  }
};

leftArrow.onclick = () => {
  changeSlideActive(-1);
  activateSlide(slideActive);
};

rightArrow.onclick = () => {
  changeSlideActive(1);
  activateSlide(slideActive);
};

submitButton.onsubmit = (event) => {
  event.preventDefault();
};
