const input = document.querySelector('input');
console.log(input);

const renderBtn = document.querySelector('button[data-action="render"]');
console.log(renderBtn);

const destroyBtn = document.querySelector('button[data-action="destroy"]');
console.log(destroyBtn);

const boxes = document.querySelector('#boxes');
console.log(boxes);

renderBtn.addEventListener('click', createDiv);

let boxSixe = 30;

function createDiv(amount){
     amount = input.value;
     console.log(amount);

     for (let index = 0; index < amount; index++) {
        const div = document.createElement('div');
        console.log(div);
        boxes.appendChild(div);
       
        div.style.backgroundColor = 
         `rgb(${Math.floor( Math.random() * 255 )}, ${Math.floor( Math.random() * 255 )}, ${Math.floor( Math.random() * 255 )})`;;
        
        div.style.width = boxSixe + `px`;
        div.style.height = boxSixe +`px`;

        boxSixe += 10;
        
     }
  
     
}

// const colors =["red", "black", "blue", "purple", "green"];

// const randomizer = max => {
//     return Math.floor(Math.random() * max);
//   };


  destroyBtn.addEventListener('click', ()=>{
    boxes.innerHTML ="";
    // boxes.removeChild(boxes.lastElementChild);

  })

 

