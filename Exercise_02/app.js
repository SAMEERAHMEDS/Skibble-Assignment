const count = document.querySelector(".counter");

const increment = document.querySelector("#increment");

const decrement = document.querySelector("#decrement");

const reset = document.querySelector("#reset");

let value = 0;

increment.addEventListener("click", () => {
  value = value + 1;
  value > 0 ? (count.style.color = "green") : (count.style.color = "red");
  count.textContent = value;
});

decrement.addEventListener("click", () => {
  value = value - 1;
  value > 0 ? (count.style.color = "green") : (count.style.color = "red");
  count.textContent = value;
});

reset.addEventListener("click", () => {
  value = 0;
  if (value == 0) {
    count.style.color = "black";
  }
  count.textContent = value;
});
