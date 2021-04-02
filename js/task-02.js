const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientsEl = document.querySelector('#ingredients')
  console.log(ingredientsEl)

  let listEl = document.createElement('li');
  console.log(listEl)

  const d = ingredients.forEach(ingredient => {
      console.log(ingredient);
      listEl.textContent = ingredient;
      

      
  });

  ingredientsEl.appendChild(listEl)