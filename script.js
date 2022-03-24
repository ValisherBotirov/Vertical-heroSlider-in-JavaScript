const buttonTepaga = document.querySelector(".btn--tepaga");
const buttonPastga = document.querySelector(".btn--pastga");
const imgs = document.querySelector(".right");
const imgArr = document.querySelectorAll(".img-1");
const leftDiv = document.querySelector(".left");
const leftArr = document.querySelectorAll(".box");

let index = 0;
let indexLeft = leftArr.length - 1;
function mooveLift() {
  if (indexLeft < 0) {
    indexLeft = leftArr.length - 1;
  } else if (indexLeft > leftArr.length - 1) {
    indexLeft = 0;
  }
  leftDiv.style.transform = `translateY(${-indexLeft * 100}vh)`;
}

function moove() {
  if (index > imgArr.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = imgArr.length - 1;
  }
  imgs.style.transform = `translateY(${-index * 100}vh)`;
}

buttonTepaga.addEventListener("click", function () {
  index++;
  indexLeft--;
  moove();
  mooveLift();
});

buttonPastga.addEventListener("click", function () {
  index--;
  indexLeft++;
  moove();
  mooveLift();
});
