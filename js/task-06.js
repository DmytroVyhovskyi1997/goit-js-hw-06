const textInput = document.querySelector('#validation-input')
console.log(textInput.getAttribute('data-length'))
textInput.addEventListener('blur', event => {
	textInput.classList.remove('valid','invalid')
	if (event.target.value.length === Number(textInput.dataset.length)) {
		textInput.classList.add('valid')
	} else(
		textInput.classList.add('invalid'))
	
})