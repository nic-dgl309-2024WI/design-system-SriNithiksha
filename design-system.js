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
////////////////
//copy to clipboard functionality
function copyToClipboard() {
  const scriptCode = document.getElementById('scriptCode');
  const range = document.createRange();
  range.selectNode(scriptCode);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  alert('Copied to clipboard!');
}
