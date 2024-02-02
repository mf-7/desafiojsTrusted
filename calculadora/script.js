let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");

plus.addEventListener("click", () => {
  let result = parseFloat(input1.value) + parseFloat(input2.value);
  document.getElementById("result").innerHTML = result;
});
minus.addEventListener("click", () => {
  let result = parseFloat(input1.value) - parseFloat(input2.value);
  document.getElementById("result").innerHTML = result;
});

multiply.addEventListener("click", () => {
  let result = parseFloat(input1.value) * parseFloat(input2.value);
  document.getElementById("result").innerHTML = result;
});

divide.addEventListener("click", () => {
  let result = parseFloat(input1.value) / parseFloat(input2.value);
  document.getElementById("result").innerHTML = result;
});
