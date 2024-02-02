//Navbar Down Homepage Fix.
//When the navbar gets the "fixed" property, the navbar without the "fixed" property disappears and there is a gap at the top.  I increased the height of the first div under the navbar when the scroll is pulled down and solved the problem. When the scroll is pulled up again, it returns to its original state.
let galleryPage1 = document.getElementsByClassName("gallery-page")[0];
window.addEventListener("scroll", function () {
  let mesafe = window.scrollY;
  if (mesafe > 250) {
    galleryPage1.classList.add("gallery-page-down")
  } else {
    galleryPage1.classList.remove("gallery-page-down")
  }
})
