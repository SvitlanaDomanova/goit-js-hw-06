const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector(".ingredients");

ingredients.map(element => {
  const listNew = document.createElement("li");
  listNew.classList.add("item");
  listNew.textContent = element;

console.log(listNew);
  
return listNew
});
