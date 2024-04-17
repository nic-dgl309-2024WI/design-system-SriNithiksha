// Reference: Chatgpt
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
  var clickedLink = document.querySelector(".topnav__link.active, .sidenav__link.active");
  if (clickedLink) {
    clickedLink.classList.add("active");
  }
}
////////////////////////////
/////////////////////////////
// Script for accordion

document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentNode;
      const answer = item.querySelector('.faq-answer');
      
      item.classList.toggle('expanded');

      if (item.classList.contains('expanded')) {
        answer.style.display = 'block';
      } else {
        answer.style.display = 'none';
      }
    });

    question.addEventListener('mouseenter', () => {
      const item = question.parentNode;
      item.classList.add('expanded');
    });

    question.addEventListener('mouseleave', () => {
      const item = question.parentNode;
      item.classList.remove('expanded');
    });
  });
});
//////////////////
/////////////////
//script for carousel example
const carousel = document.querySelector('.c-carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const numCardsToShow = 3;

let currentIndex = 0;
const card = document.querySelectorAll('.c-sf__card');

nextBtn.addEventListener('click', () => {
  if (currentIndex < cards.length - numCardsToShow) {
    currentIndex += numCardsToShow;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
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
//copy to clipboard functionality
function copyToClipboard() {
  // Get the text from the pre element
  const textToCopy = document.getElementById("codeSnippet").innerText;
  
  // Use the Clipboard API to copy the text
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert("Code copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy text: ", err);
  });
}

function toggleAccordion(element) {
  const item = element.parentElement;
  const items = document.querySelectorAll('.accordion-item');

  for (const otherItem of items) {
    if (otherItem !== item) {
      otherItem.querySelector('.accordion-body').style.maxHeight = '0';
      otherItem.querySelector('.accordion-icon').textContent = '+';
    }
  }

  const body = item.querySelector('.accordion-body');
  const isOpen = parseInt(body.style.maxHeight) > 0;

  body.style.maxHeight = isOpen ? '0' : body.scrollHeight + 'px'; // Change '1000px' to a desired max-height value
  element.querySelector('.accordion-icon').textContent = isOpen ? '+' : '-';
}
