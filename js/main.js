const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  effect: "cards",
  grabCursor: true,
  centerdSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    stopOnLastSlide: true,
    disableOnInteraction: true,
  },
  mousewheel: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 700,
});

// RESUME
const name = document.getElementById("name");
const profession = document.getElementById("profession");
const contact = document.getElementById("contact");
const education = document.getElementById("education");
const skills = document.getElementById("skills");
const experience = document.getElementById("experience");

const nameInput = document.getElementById("nameInput");
const professionInput = document.getElementById("professionInput");
const number = document.getElementById("number");
const email = document.getElementById("email");
const telegram = document.getElementById("telegram");
const educationInput = document.getElementById("education-input");
const skillsInput = document.getElementById("skills-input");
const experienceInput = document.getElementById("experience-input");

const form = document.getElementById("form");
const sendBtn = document.getElementById("send-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameV = nameInput.value;
  const professionV = professionInput.value;
  const numberV = number.value;
  const emailV = email.value;
  const telegramV = telegram.value;
  const educationInputV = educationInput.value;
  const skillsInputV = skillsInput.value;
  const experienceInputV = experienceInput.value;

  sendBtn.addEventListener("click", () => {
    name.innerHTML = `<h2>${nameV}</h2>`;
    profession.innerHTML = `<p>${professionV}</p>`;
    contact.innerHTML = `<p>${numberV}</p> <p>${emailV}</p> <p>${telegramV}</p>`;
    education.innerHTML = `<p>${educationInputV}</p>`;
    skills.innerHTML = `<p>${skillsInputV}</p>`;
    experience.innerHTML = `<p>${experienceInputV}</p>`;
  });
});
