const decrementBtn = document.querySelector('button[data-action="decrement"]')
// console.log(decrementBtn);

const  incrementBtn = document.querySelector('button[data-action="increment"]')
// console.log(incrementBtn);

const counterValue = document.querySelector('#value');
// console.log(valueEl);

decrementBtn.addEventListener('click', increment);

function increment() {
    counterValue.textContent -= 1;
};

incrementBtn.addEventListener('click', decrement);

function decrement() {
    counterValue.textContent ++;
};