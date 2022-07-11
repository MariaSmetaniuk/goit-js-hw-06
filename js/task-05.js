const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener("input", changeName);

function changeName() {
    outputEl.textContent = inputEl.value === '' ? 'Anonymous' : inputEl.value;
}
