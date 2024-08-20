function togglemenu() {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
  
    // Toggle the 'open' class on the menu links and hamburger icon
    menuLinks.classList.toggle('open');
    hamburgerIcon.classList.toggle('open');
  }
  
  // Optionally add a console log to verify script loading
  console.log("Script loaded");
  