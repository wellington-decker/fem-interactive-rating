const submitBtn = document.querySelector(".submit-rating");
const number_ = document.querySelectorAll(".numbers");
const mainContent = document.querySelector("main");
const thankUContainer = document.querySelector(".thank-you-container");
const ratingNumber = document.querySelector(".text");

const mouseover = (event) => {
  event.target.previousElementSibling.classList.add("addEff");
};

const mouseout = (event) => {
  event.target.previousElementSibling.classList.remove("addEff");
};

number_.forEach((num_) => {
  num_.addEventListener("click", () => {
    let no_ = num_.innerHTML;
    ratingNumber.innerHTML = no_;
  });
  num_.addEventListener("mouseover", mouseover);
  num_.addEventListener("mouseout", mouseout);
});

submitBtn.addEventListener("click", () => {
  mainContent.style.display = "none";
  setTimeout(() => {
    thankUContainer.classList.add("display");
  }, 500);
});
