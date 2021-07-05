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
const bullets = document.getElementsByClassName("slide-bullet");

const activateSlide = (n) => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    bullets[i].style.opacity = 0.5;
  }
  slides[n].style.display = "block";
  bullets[n].style.opacity = 1;
};

const bulletSlide = (n) => {
  console.log("yuhu");
  slideActive = n;
  activateSlide(slideActive);
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
  return !teks || (teks = "");
};

const isEmailValid = (teks) => {
  const emailRegex = new RegExp(/.*@.*\..*/i);
  return emailRegex.test(teks);
};

const checkNameField = () => {
  if (isFieldEmpty(nameField.value)) {
    nameField.style.borderColor = "red";
    nameWarning.style.visibility = "visible";
    return false;
  } else {
    nameField.style.borderColor = "rgb(211,211,211)";
    nameWarning.style.visibility = "hidden";
    return true;
  }
};

const checkEmailField = () => {
  if (!isEmailValid(emailField.value)) {
    emailField.style.borderColor = "red";
    emailWarning.style.visibility = "visible";
    return false;
  } else {
    emailField.style.borderColor = "rgb(211,211,211)";
    emailWarning.style.visibility = "hidden";
    return true;
  }
};

const checkMessageField = () => {
  if (isFieldEmpty(messageField.value)) {
    messageField.style.borderColor = "red";
    messageWarning.style.visibility = "visible";
    return false;
  } else {
    messageField.style.borderColor = "rgb(211,211,211)";
    messageWarning.style.visibility = "hidden";
    return true;
  }
};

const checkAllField = () => {
  const a = checkNameField();
  const b = checkEmailField();
  const c = checkMessageField();
  return a && b && c;
};

let slideActive = 0;
activateSlide(slideActive);

nameField.onblur = () => {
  checkNameField();
};

emailField.onblur = () => {
  checkEmailField();
};

messageField.onblur = () => {
  checkMessageField();
};

leftArrow.onclick = () => {
  changeSlideActive(-1);
  activateSlide(slideActive);
};

rightArrow.onclick = () => {
  changeSlideActive(1);
  activateSlide(slideActive);
};

submitButton.onclick = () => {
  if (checkAllField()) {
    window.location.href = window.location.href;
  }
};

for (let i = 0; i < bullets.length; i++) {
  bullets[i].onclick = () => {
    bulletSlide(i);
  };
}
