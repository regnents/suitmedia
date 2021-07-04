const leftArrow = document.getElementById("arrowLeft");
const rightArrow = document.getElementById("arrowRight");
const emailField = document.getElementById("emailField");
const submitButton = document.getElementById("submitButton");

const slides = document.getElementsByClassName("slides");

const activateSlide = (n) => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
};

const moveSlide = (n) => {
  slideActive += n;
  if (slideActive < 0) {
    slideActive = slides.length - 1;
  } else if (slideActive >= slides.length) {
    slideActive = 0;
  }
};

let slideActive = 0;
activateSlide(slideActive);

emailField.onchange = function () {
  const emailRegex = new RegExp(/.*@.*\..*/i);
  const emailValue = emailField.value;
  console.log(emailValue);
  if (emailRegex.test(emailValue)) {
    console.log("yes");
  }
};

leftArrow.onclick = () => {
  moveSlide(-1);
  activateSlide(slideActive);
};

rightArrow.onclick = () => {
  moveSlide(1);
  activateSlide(slideActive);
};

submitButton.onsubmit = (event) => {
  event.preventDefault();
};
