const input = document.querySelector('input');
console.log(input);

const renderBtn = document.querySelector('button[data-action="render"]');
console.log(renderBtn);

const destroyBtn = document.querySelector('button[data-action="destroy"]');
console.log(destroyBtn);

const boxes = document.querySelector('#boxes');
console.log(boxes);

renderBtn.addEventListener('click', createBoxes);

function createBoxes(amount){
     amount = input.value;
     console.log(amount);

     for (let index = 0; index < amount; index++) {
        const div = document.createElement('div');
        console.log(div);
        boxes.appendChild(div);
        div.classList.add('box');

        div.style.backgroundColor = colors[randomizer(colors.length)];
        
         
     }
     const boxesArray = boxes.querySelectorAll('div');
        console.log(boxesArray);

        // for (let index = 0; index < boxesArray.length; index++) {
        //     const el = boxesArray[index];
        //     console.log(el);
        //     el.style.width += 30 + `px`;

            
        // }

        // boxesArray.forEach((div, index) =>{
        //     console.log(index);
        //     console.log(div)
        //     div.style.width = 30 + `px`;
        //     div.style.width = div.style.width + 10 + `px`;
        // })
     
}

const colors =["red", "black", "blue", "purple", "green"];

const randomizer = max => {
    return Math.floor(Math.random() * max);
  };


  destroyBtn.addEventListener('click', ()=>{
    boxes.innerHTML ="";
    // boxes.removeChild(boxes.lastElementChild);

    
  })

 

