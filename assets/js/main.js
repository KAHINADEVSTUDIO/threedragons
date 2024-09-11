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