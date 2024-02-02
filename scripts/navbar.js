//Burger Menu Click and Animation.
const navShow = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-right ul');
  const links = document.querySelectorAll('.nav-right ul li');

  //Hamburger Click.
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    links.forEach((link,index) =>{
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `linksAnimation 0.5s ease forwards ${index / 5 + 0.2}s`;
      }  
    });

    burger.classList.toggle('close')
  });
}
navShow();

//###################################

//Navbar Down.
let navbar = document.getElementsByTagName("header")[0];
window.addEventListener("scroll", function () {
  let mesafe = window.scrollY;
  if (mesafe > 250) {
    navbar.classList.add("header-down")
  } else {
    navbar.classList.remove("header-down")
  }
})
