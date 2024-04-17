// Hamburger menuu
document.addEventListener("DOMContentLoaded", function () {
  // Add 'active' class to the current page link
  var currentPage = window.location.href;
  var links = document.querySelectorAll(".topnavbar__link");

  links.forEach(function (link) {
    if (link.href === currentPage) {
      link.classList.add("active");
    }
  });
});

function toggleNav() {
  var sidenav = document.getElementById("myTopnav");
  var hamburger = document.querySelector(".hamburger");
  var cancel = document.querySelector(".cancel");

  // Remove 'active' class from all links
  var links = document.querySelectorAll(".topnavbar__link");
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
  var clickedLink = document.querySelector(".topnavbar__link.active");
  if (clickedLink) {
    clickedLink.classList.add("active");
  }
}

// Carousel script
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Category scroll behaviour script - category section
const cardsContainer = document.querySelector('.c-category--cards');
  const cards = document.querySelectorAll('.c-card');

  let index = 0;

  function showNextCards() {
    const endIndex = Math.min(index + 3, cards.length);
    for (let i = index; i < endIndex; i++) {
      cards[i].style.display = 'flex';
    }
    index = endIndex;
  }

  // Show the next cards when scrolling
  cardsContainer.addEventListener('scroll', function() {
    if (cardsContainer.scrollLeft + cardsContainer.clientWidth >= cardsContainer.scrollWidth) {
      showNextCards();
    }
  });

  // Show initial cards
  showNextCards();

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

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
//////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
