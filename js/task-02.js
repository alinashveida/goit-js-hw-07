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



// const ingridientEl = ingredients.forEach((ingredient) =>{
//   const itemEl = document.createElement('li');
//   itemEl.textContent = ingredient;

//   ingredientsListEl.append(itemEl);
// })
//////////////////////////////////////////////////////
// const ingredientArray = [...ingredients].map(ingredient =>{
//   const itemEl = document.createElement('li');
//   itemEl.textContent = ingredient;
//   return ingredientsListEl.append(itemEl)
// } )

// console.log(ingredientArray);
///////////////////////////////////////////////////////////
const ingridientEl = (ingridient => {
  return `<li> ${ingridient} </li>`
 })

const indridientsList = ingredients.map(ingridientEl).join("");

ingredientsListEl.insertAdjacentHTML("beforeend", indridientsList);
///////////////////////////////////////////////////////////////////////////

// let d = document.createElement('li');
// const ingridientEl = (ingridient) => {
//        return d.textContent = ingredient;
//    }
  
// console.log(ingridientEl)
