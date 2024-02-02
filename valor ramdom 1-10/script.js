let randomNumber = document.getElementById("randomNumber");
let button = document.getElementById("button");

button.addEventListener("click", () => {
  randomNumber.innerHTML = Math.floor(Math.random() * 10);
  console.log(randomNumber);
});
