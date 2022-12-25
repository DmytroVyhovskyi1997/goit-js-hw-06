const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients");
const liArray = []
ingredients.forEach(ingredient => {
let listItem = document.createElement('li')
listItem.className = 'item';
listItem.textContent = ingredient
liArray.push(listItem)
})
ingredientsList.append(...liArray)