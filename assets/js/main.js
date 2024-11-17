// Header fixed on scroll
document.addEventListener("scroll", () => {

    const header = document.querySelector("#header");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }

});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-link");
  
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  });
  