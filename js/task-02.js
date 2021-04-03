const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];



const ingredientsListEl = document.querySelector('#ingredients')
 console.log(ingredientsListEl);



const ingridientEl = ingredients.forEach((ingredient) =>{
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;

  ingredientsListEl.append(itemEl);
})





