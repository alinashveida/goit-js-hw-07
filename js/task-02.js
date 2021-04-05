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

const ingridientEl = (ingridient => {
  return `<li> ${ingridient} </li>`
 })

const indridientsList = ingredients.map(ingridientEl).join("");

ingredientsListEl.insertAdjacentHTML("beforeend", indridientsList);
