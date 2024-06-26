// Author: Sri Nithiksha
// Reference: Chatgpt, w3schools, javatpoint
// Made changes according to my code
// design-system.js
document.addEventListener("DOMContentLoaded", function () {
  // Add 'active' class to the current page link
  var currentPage = window.location.href;
  var links = document.querySelectorAll(".topnav__link, .sidenav__link");

  links.forEach(function (link) {
    if (link.href === currentPage) {
      link.classList.add("active");
    }
  });
});

function toggleNav() {
  var sidenav = document.getElementById("mySidenav");
  var hamburger = document.querySelector(".hamburger");
  var cancel = document.querySelector(".cancel");

  // Remove 'active' class from all links
  var links = document.querySelectorAll(".topnav__link, .sidenav__link");
  links.forEach(function (link) {
    link.classList.remove("active");
  });

  // Toggle the side navbar
  sidenav.style.display = sidenav.style.display === "block" ? "none" : "block";

  // Toggle the visibility of hamburger and cancel icons
  hamburger.style.display =
    hamburger.style.display === "none" ? "inline-block" : "none";
  cancel.style.display =
    cancel.style.display === "none" ? "inline-block" : "none";

  // Add 'active' class to the clicked link
  var clickedLink = document.querySelector(
    ".topnav__link.active, .sidenav__link.active"
  );
  if (clickedLink) {
    clickedLink.classList.add("active");
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
// Script for accordion
var acc = document.getElementsByClassName("c-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//script for carousel example
const carousel = document.querySelector(".c-carousel");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const numCardsToShow = 3;

let currentIndex = 0;
const card = document.querySelectorAll(".c-sf__card");

nextBtn.addEventListener("click", () => {
  if (currentIndex < cards.length - numCardsToShow) {
    currentIndex += numCardsToShow;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex >= numCardsToShow) {
    currentIndex -= numCardsToShow;
    updateCarousel();
  }
});

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth;
  const newPosition = -currentIndex * cardWidth;
  carousel.style.transform = `translateX(${newPosition}px)`;
}
///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
//copy to clipboard functionality
function copyToClipboard() {
  // Get the text from the pre element
  const textToCopy = document.getElementById("codeSnippet").innerText;

  // Use the Clipboard API to copy the text
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("Code copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}
