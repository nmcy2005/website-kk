let desc = document.querySelector(".desc");
let btn = document.querySelector(".desc-btn");
let close_btn = document.querySelector(".icon");

let main = document.querySelector("#home");
let team = document.querySelector("#team");
let task = document.querySelector("#task");
let contact = document.querySelector("#contact");

//nav links
let start_link = document.querySelector("#home-link");
let team_link = document.querySelector("#team-link");
let tasks_link = document.querySelector("#task-link");
let contact_link = document.querySelector("#contact-link");

let links = [start_link, team_link, tasks_link, contact_link];

//modals

let team_1 = document.querySelector(".team_1");
let team_2 = document.querySelector(".team_2");
let team_3 = document.querySelector(".team_3");

function openTeam(id) {
  window.location.replace(`team/team_${id}.html`);
}

function submitForm(e) {
  e.preventDefault();
  let mail = document.querySelector(".form-mail").value;
  let subject = document.querySelector(".form-select").value;
  let message = document.querySelector(".form-area").value;

  console.log(mail, subject, message);
}

//hamburger menu

let toggleButton = document.querySelector(".toggle-button");
let toggleButtonLines = document.querySelectorAll(".bar");
let navLinks = document.querySelector(".nav-links");

let navOpen = false;

toggleButton.addEventListener("click", () => {
  if (navOpen) {
    navLinks.classList.remove("active");
    navOpen = false;
    toggleButtonLines[1].classList.remove("bar-hidden");
    toggleButtonLines[0].classList.remove("bar-active-top");
    toggleButtonLines[2].classList.remove("bar-active-bottom");
    toggleButton.classList.remove("toggle-button-open");
  } else {
    navLinks.classList.add("active");
    navOpen = true;
    toggleButton.classList.add("toggle-button-open");
    toggleButtonLines[1].classList.add("bar-hidden");
    toggleButtonLines[0].classList.add("bar-active-top");
    toggleButtonLines[2].classList.add("bar-active-bottom");
  }
});
