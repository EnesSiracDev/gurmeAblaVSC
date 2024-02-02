//Navbar Down Homepage Fix.
//When the navbar gets the "fixed" property, the navbar without the "fixed" property disappears and there is a gap at the top.  I increased the height of the first div under the navbar when the scroll is pulled down and solved the problem. When the scroll is pulled up again, it returns to its original state.
let Homepage1 = document.getElementsByClassName("home-page-title")[0];
window.addEventListener("scroll", function () {
  let mesafe = window.scrollY;
  if (mesafe > 250) {
    Homepage1.classList.add("home-page-title-down")
  } else {
    Homepage1.classList.remove("home-page-title-down")
  }
})
