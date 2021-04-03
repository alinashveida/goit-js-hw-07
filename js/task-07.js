const inputEl = document.querySelector('#font-size-control');
console.log(inputEl);

const textEl = document.querySelector('#text');
console.log(textEl);

inputEl.addEventListener('input' , onSizeControlInput );

function onSizeControlInput (event){

    console.log(textEl.style.fontSize = `${inputEl.value}px`)
}
