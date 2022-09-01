const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");

signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});
