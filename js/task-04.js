const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValueEl = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

function decrement() {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
}
function increment() {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
}
