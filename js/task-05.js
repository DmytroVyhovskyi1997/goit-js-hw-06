let nameInput = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");
nameInput.addEventListener('input', event =>{
const value = event.target.value.trim();
nameOutput.textContent = value ? value : 'Anonymous'

})