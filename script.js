function downloadCV() {
  const link = document.createElement('a');
  link.href = 'resume/CV_Emmanuel_Defiesta.pdf'; // Update with the correct path
  link.download = 'CV_Emmanuel_Defiesta.pdf'; // Filename
  link.click();
}

function openCV() {
  window.open('resume/CV_Emmanuel_Defiesta.pdf', '_blank');
}

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section"); // Select all sections
  const navLinks = document.querySelectorAll("nav ul li a"); // Select all nav links

  function changeActiveLink() {
      let scrollPos = window.scrollY; // Get the current scroll position

      sections.forEach((section) => {
          const sectionTop = section.offsetTop; // Top position of the section
          const sectionHeight = section.offsetHeight; // Height of the section

          // Check if the scroll position is within the section
          if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
              // Remove active class from all links
              navLinks.forEach((link) => link.classList.remove("active"));

              // Add active class to the corresponding link
              const activeLink = document.querySelector(`nav ul li a[href="#${section.id}"]`);
              if (activeLink) {
                  activeLink.classList.add("active");
              }
          }
      });
  }

  // Run the function on scroll
  window.addEventListener("scroll", changeActiveLink);
});

// Assuming you want to show the containers after a button click or on page load
window.onload = function() {
  const containers = document.querySelectorAll('.sub-container');
  containers.forEach((container) => {
      container.style.opacity = '1'; // Make the container visible
  });
};

console.log('Hello World!')
