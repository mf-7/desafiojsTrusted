let bulbOff = document.getElementById("bulbOff");
let bulbOn = document.getElementById("bulbOn");
let button = document.getElementById("button");
console.log("teste");
button.addEventListener("click", () => {
  console.log("oi");
  if (bulbOff.classList.contains("on")) {
    bulbOff.classList.remove("on");
    bulbOn.classList.add("on");
    button.innerHTML = "Apagar lâmpada";
    button.classList = "off";
  } else {
    bulbOff.classList.add("on");
    bulbOn.classList.remove("on");
    button.innerHTML = "Acender lâmpada";
    button.classList.remove("off");
  }
});
