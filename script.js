const buttonTepaga = document.querySelector(".btn--tepaga");
const buttonPastga = document.querySelector(".btn--pastga");
const imgs = document.querySelector(".right");

let index = 0;

function moove() {
  imgs.style.transform = `translateY(-${index * 100}vh)`;
  if (index == 3) {
    index = 0;
  }
  // if (index == 0) {
  //   index = 3;
  // }
}
buttonTepaga.addEventListener("click", function () {
  index++;
  moove();
});

buttonPastga.addEventListener("click", function () {
  index--;
  moove();
});
