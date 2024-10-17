const btnX = document.querySelector("#incrementXBtn");
const btnY = document.querySelector("#incrementYBtn");
const pressedText = document.querySelector("#pressedText");
const triggerText = document.querySelector("#triggerText");

let pressedCount = 0;
let triggerCount = 0;
const myDebounce = (cb, delay) => {
  let timer;

  return function (...arg) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...arg);
    }, delay);
  };
};
const debounceCount = myDebounce(() => {
  pressedCount += +1;
  pressedText.innerHTML = `${pressedCount}`;
}, 500);

btnX.addEventListener("click", () => {
  triggerCount += 1;
  triggerText.innerHTML = `${triggerCount}`;
  debounceCount();
});
