const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".main-nav");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("tog");
});
