let num = 0;

let inc = document.getElementById("inc");
let dec = document.getElementById("dec");
let number = document.getElementById("number");
let reset = document.querySelector(".reset");

function displayNum() {
  number.innerHTML = num;
}
function changeColor() {
  if (num == 0) {
    number.style.color = "black";
  } else if (num > 0) {
    number.style.color = "green";
  } else number.style.color = "red";
}

dec.addEventListener("click", () => {
  num--;
  displayNum();
  changeColor();
});

inc.addEventListener("click", () => {
  num++;
  displayNum();
  changeColor();
});

reset.addEventListener("click", () => {
  num = 0;
  displayNum();
  changeColor();
});
