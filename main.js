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
  ////////////////
  ///////////////
  ///////////////

  /// Map 
  function initMap() {
    // Specify the coordinates for the center of the map
    var center = { lat: 40.7128, lng: -74.0060 }; // New York City coordinates

    // Create a new map object and specify the DOM element for display
    var map = new google.maps.Map(document.getElementById('map'), {
      center: center,
      zoom: 12 // Set the initial zoom level
    });
  }