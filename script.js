// Boosted Media Marketing site scripts
// Handles mobile navigation toggle and dynamic year in footer

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navList = document.querySelector('.nav ul');

  // Toggle mobile menu
  hamburger.addEventListener('click', function () {
    navList.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // Close the menu when a link is clicked (useful on mobile)
  navList.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (navList.classList.contains('open')) {
        navList.classList.remove('open');
        hamburger.classList.remove('active');
      }
    });
  });

  // Set current year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});