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
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pagination = document.getElementById('pagination');
    const dots = [];
  
    let currentPage = 0;
    const cardsPerPage = 3;
  
    // Calculate the total number of pages
    const totalPages = Math.ceil(carousel.children.length / cardsPerPage);
  
    // Create dots for pagination
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      dot.addEventListener('click', () => {
        goToPage(i);
      });
      dots.push(dot);
      pagination.appendChild(dot);
    }
  
    // Show active dot
    function updateDots() {
      dots.forEach((dot, index) => {
        if (index === currentPage) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  
    // Go to a specific page
    function goToPage(pageIndex) {
      currentPage = pageIndex;
      const startIndex = currentPage * cardsPerPage;
      const endIndex = Math.min(startIndex + cardsPerPage, carousel.children.length);
      for (let i = 0; i < carousel.children.length; i++) {
        if (i >= startIndex && i < endIndex) {
          carousel.children[i].style.display = 'flex';
        } else {
          carousel.children[i].style.display = 'none';
        }
      }
      updateDots();
    }
  
    // Event listeners for navigation buttons
    prevBtn.addEventListener('click', () => {
      if (currentPage > 0) {
        goToPage(currentPage - 1);
      }
    });
  
    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages - 1) {
        goToPage(currentPage + 1);
      }
    });
  
    // Initialize
    updateDots();
  });
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
