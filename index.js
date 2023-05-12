"use strict"


const ratingElementBtns = document.querySelectorAll(".rating__element-btn");
const ratingBtnPressed = new CustomEvent("rating-btn-pressed");

let userRating;

ratingElementBtns.forEach(button => {
  
  button.addEventListener("click", function() {
    ratingElementBtns.forEach(button => {
      button.dispatchEvent(ratingBtnPressed);
    });
    this.classList.add("rating__element-btn_pressed");
    userRating = button.innerText;
  });
  
  button.addEventListener("rating-btn-pressed", function() {
    this.classList.remove("rating__element-btn_pressed");
  });

});

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function() {
  if (userRating !== undefined) {
    document.querySelector(".rating-component_question").style.display = "none";
    document.querySelector(".rating-component_ty").style.display = "flex";
    document.querySelector(".rating-component__your-rating > span").textContent = userRating;
  }
});