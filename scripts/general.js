//Upper Button
let upper = document.getElementsByClassName("js-upper-button")[0];
window.addEventListener("scroll", function () {
  let mesafe = window.scrollY;

  if (mesafe > 890) {
    upper.classList.add("js-upper-button-show")
  } else {
    upper.classList.remove("js-upper-button-show")
  }
})
upper.addEventListener("click", function () {
  window.scrollTo(0, 0);
})
