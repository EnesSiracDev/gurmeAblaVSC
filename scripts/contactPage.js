//Navbar Down Homepage Fix.
//When the navbar gets the "fixed" property, the navbar without the "fixed" property disappears and there is a gap at the top.  I increased the height of the first div under the navbar when the scroll is pulled down and solved the problem. When the scroll is pulled up again, it returns to its original state.
let contactPage1 = document.getElementsByClassName("contact-page")[0];
window.addEventListener("scroll", function () {
  let mesafe = window.scrollY;
  if (mesafe > 250) {
    contactPage1.classList.add("contact-page-down")
  } else {
    contactPage1.classList.remove("contact-page-down")
  }
})
