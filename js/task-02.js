const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = ingredients.map(element => {
  const listNew = document.createElement("li");
  listNew.textContent = `${element}`;
  listNew.classList.add("item");

return listNew
});
console.log(ingredientsEl);
const ingredient = document.querySelector("ul");
ingredient.append(...ingredientsEl);