function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector("button.change-color");
const body = document.querySelector('body');
const span = document.querySelector('span.color');

colorBtn.addEventListener('click', () =>{
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;

})

