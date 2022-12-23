const fontSizeControl = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');

fontSizeControl.addEventListener('change', (size) => {
    text.style.fontSize = `${size.target.value }px`
})