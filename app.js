const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".main-nav");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("tog");
});

window.addEventListener('scroll', function(e) {
  const lastPosition = window.scrollY
  if(lastPosition > 50) {
      navbar.classList.add('back')
  } else if (navbar.classList.contains('scrolled')) {
      navbar.classList.remove('back')  
  } else {
      navbar.classList.remove('back')          
  }
})
