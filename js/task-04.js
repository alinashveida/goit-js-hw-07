const decrementBtn = document.querySelector('button[data-action="decrement"]')
// console.log(decrementBtn);

const  incrementBtn = document.querySelector('button[data-action="increment"]')
// console.log(incrementBtn);
const valueEl = document.querySelector('#value');

let counterValue = 0;
// console.log(valueEl);

decrementBtn.addEventListener('click', increment);

function increment() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

incrementBtn.addEventListener('click', decrement);

function decrement() {
    counterValue += 1;
    valueEl.textContent = counterValue;
};