const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

//   const ingredientsEl = document.querySelector('#ingredients')
//   console.log(ingredientsEl)

//   let listEl = document.createElement('li');
//   console.log(listEl)

//   const d = ingredients.forEach(ingredient => {
//       console.log(ingredient);
//       listEl.textContent = ingredient;
      

      
//   });

//   ingredientsEl.appendChild(listEl)

const ingredientsEl = document.querySelector('#ingredients')
 console.log(ingredientsEl);

 const listItem = (item => {
     return `
       <li>${item}</li>`
 });

 console.log(listItem(ingredients[1]));

 const listEl = ingredients.map(listItem).join("");
 console.log(listEl);

//  ingredientsEl.insertAdjacentHTML("beforeend", listEl);

// const listEl2 = document.createElement('li');
  
//   listEl2.textContent = ingredients[0];
//   console.log(listEl2);

  




