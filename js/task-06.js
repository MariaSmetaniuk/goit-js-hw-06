const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', verifySymbolsNumber);

function verifySymbolsNumber() {
    inputEl.classList.add(inputEl.value.length === Number(inputEl.dataset.length) ? 'valid' : 'invalid')
}