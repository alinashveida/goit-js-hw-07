const inputEl = document.querySelector('#validation-input');
console.log(inputEl);

const length = inputEl.dataset.length;
console.log(length);

inputEl.addEventListener('blur', onInputBlur );

function onInputBlur (event) {
    if(inputEl.value.length < length || inputEl.value.length > length){
        inputEl.classList.add("invalid");
    }
    else{
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid")
    }
};