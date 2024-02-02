//Navbar Down Homepage Fix.
//When the navbar gets the "fixed" property, the navbar without the "fixed" property disappears and there is a gap at the top.  I increased the height of the first div under the navbar when the scroll is pulled down and solved the problem. When the scroll is pulled up again, it returns to its original state.
let galleryPage1 = document.getElementsByClassName("meals-page")[0];
window.addEventListener("scroll", function () {
  let mesafe = window.scrollY;
  if (mesafe > 250) {
    galleryPage1.classList.add("meals-page-down")
  } else {
    galleryPage1.classList.remove("meals-page-down")
  }
})

//#################################################################

//When the button is clicked, the information div appears.
// Button Index
let buttons = document.getElementsByClassName('meal-details-button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (index) {
    return function () {
      // Text Index
      let hiddenText = document.getElementsByClassName("meal-hidden-text")[index];

      if (hiddenText.style.display === "block") {
        hiddenText.style.display = "none";
      } else {
        hiddenText.style.display = "block";
      }
    };
  }(i)); // Call the anonymous function immediately and pass the current index
}
