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

// Our Categories section
//horizontal scroll bar function

document.addEventListener('DOMContentLoaded', function() {
  const categoryCardsContainer = document.querySelector('.category__cards');

  // Sample data for cards
  const cardData = [
    { imgSrc: 'images/seasonal favs/cedar.jpg', altText: 'conifers', title: 'Conifers' },
    { imgSrc: 'images/seasonal favs/cedar.jpg', altText: 'deciduous', title: 'Deciduous' },
    { imgSrc: 'images/seasonal favs/cedar.jpg', altText: 'evergreen', title: 'Evergreen' },
    { imgSrc: 'images/seasonal favs/cedar.jpg', altText: 'Grasses and Bamboo', title: 'Grasses and Bamboo(Assorted)' },
    { imgSrc: 'images/seasonal favs/cedar.jpg', altText: 'vines', title: 'Vines(Assorted)' },
    { imgSrc: 'images/seasonal favs/cedar.jpg', altText: 'conifers', title: 'Edibles(Fruits, Nuts, Berries)' },
    { imgSrc: 'images/seasonal favs/cedar.jpg', altText: 'japanesemaples', title: 'Japanese Maples' },
    { imgSrc: 'images/seasonal favs/cedar.jpg', altText: 'trees and shrubs', title: 'Trees and Shrubs' }
  ];

  // Function to create card elements
  function createCardElement(data) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('c-card', 'l-flex', 'l-flex-column', 'l-align-center', 'u-card', 'l-p-300');

    const imgElement = document.createElement('img');
    imgElement.src = data.imgSrc;
    imgElement.alt = data.altText;
    imgElement.style.width = '350px';
    imgElement.style.height = '300px';

    const titleElement = document.createElement('h3');
    titleElement.classList.add('u-secondary-text', 'u-subhead__100', 'u-title__size', 'u-title__weight', 'u-head__height');
    titleElement.textContent = data.title;

    cardElement.appendChild(imgElement);
    cardElement.appendChild(titleElement);

    return cardElement;
  }

  // Function to append card elements to the container
  function appendCards() {
    cardData.forEach(function(data) {
      const cardElement = createCardElement(data);
      categoryCardsContainer.appendChild(cardElement);
    });
  }

  appendCards();
});

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
