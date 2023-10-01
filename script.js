// Get tabLinks & tabContents
var tabLinks = document.getElementsByClassName("tab-links"),
  tabContents = document.getElementsByClassName("tab-contents");

// On openTab fucntion call
function openTab(tabname) {
  for (item of tabLinks) {
    item.classList.remove("active-link");
  }
  for (item of tabContents) {
    item.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Get SideMenu
var sideMenu = document.getElementById("sidemenu");

// On openTab fucntion call
function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}

const whatsappButton = document.getElementById("whatsapp");
const emailButton = document.getElementById("email");
const whatsappPopup = document.getElementById("whatsapp-popup");
const emailPopup = document.getElementById("email-popup");
let whatsappVisible = false;
let emailVisible = false;

// Function to close the pop-up
function closePopup(popup) {
    popup.style.display = "none";
}

whatsappButton.addEventListener("click", () => {
    whatsappPopup.style.display = "block";
});

emailButton.addEventListener("click", () => {
    emailPopup.style.display = "block";
});

// Close the pop-ups when the close button is clicked
whatsappPopup.addEventListener("click", (event) => {
    if (event.target.classList.contains("close-button")) {
        closePopup(whatsappPopup);
    }
});

emailPopup.addEventListener("click", (event) => {
    if (event.target.classList.contains("close-button")) {
        closePopup(emailPopup);
    }
});

// Function to close pop-ups when scrolling
function closePopupsOnScroll() {
    closePopup(whatsappPopup);
    closePopup(emailPopup);
}

window.addEventListener("scroll", closePopupsOnScroll);

