const inputEl = document.querySelector('#name-input');
console.log(inputEl);

const outputEl = document.querySelector('#name-output');
console.log(outputEl);

inputEl.addEventListener('input', hendleInputValue);

function hendleInputValue (event) {
    if(inputEl.value.length < 1){
        outputEl.textContent = 'незнакомец';
    }
    else{
        console.log(outputEl.textContent = inputEl.value);

    }
    
    
  


}