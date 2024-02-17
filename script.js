const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const ul = document.querySelector(".ul");

hamburger.addEventListener("click", () => {
    hamburger.style.display = "none";
    close.style.display = "block";
    ul.style.transform = "translateX(0%)";
});

close.addEventListener("click", () => {
    close.style.display = "none";
    hamburger.style.display = "block";
    ul.style.transform = "translateX(-100%)";
  
});

let home = document.querySelector(".home");
let homectn = document.querySelector(".homectn");
let skill = document.querySelector(".skill");
let skillctn = document.querySelector(".skillctn");
let about = document.querySelector(".about");
let aboutctn = document.querySelector(".aboutctn")
let contact = document.querySelector(".contact");
let contactctn = document.querySelector(".contactctn");

let headings = document.getElementsByClassName("popup");
let content = document.getElementsByClassName("content");

function hideContentOnSmallScreen() {
    const mq = window.matchMedia("(max-width: 767px)");
    if (mq.matches) {
        for (let i = 0; i < headings.length; i++) {
            content[i].style.display = "none";
        }
    }
}


home.addEventListener("click", () => {
    homectn.style.display = homectn.style.display === "none" || homectn.style.display === "" ? "block" : "none";
    skillctn.style.display = "none";
    aboutctn.style.display = "none";
    contactctn.style.display = "none";
    hideContentOnSmallScreen();
});
skill.addEventListener("click", () => {
    homectn.style.display = "none";
    skillctn.style.display = skillctn.style.display === "none" || skillctn.style.display === "" ? "block" : "none";
    aboutctn.style.display = "none";
    contactctn.style.display = "none";
    hideContentOnSmallScreen();
});
about.addEventListener("click", () => {
    homectn.style.display = "none";
    skillctn.style.display = "none";
    aboutctn.style.display = aboutctn.style.display === "none" || aboutctn.style.display === "" ? "block" : "none";
    contactctn.style.display = "none";
    hideContentOnSmallScreen();
});
contact.addEventListener("click", () => {
    homectn.style.display = "none";
    skillctn.style.display = "none";
    aboutctn.style.display = "none";
    contactctn.style.display = contactctn.style.display === "none" || contactctn.style.display === "" ? "block" : "none";
    hideContentOnSmallScreen();
});
