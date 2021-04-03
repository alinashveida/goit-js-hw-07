const categoriesEl = document.querySelector('#categories');
// console.log(categoriesEl)

const itemEl = categoriesEl.querySelectorAll('.item');
// console.log(itemEl);
// console.log(itemEl.length);

console.log(`В списке ${itemEl.length}  категории.`);


const findQuantity = itemEl.forEach(item => {
  const itemArray = item.querySelectorAll('li');
//   console.log(itemArray);
  const itemArrayLength = itemArray.length;

  const titleEl = item.querySelector('h2');
   return console.log(`Категория: ${titleEl.textContent} 
Количество элементов: ${itemArrayLength}` )
 
})

console.log(findQuantity);