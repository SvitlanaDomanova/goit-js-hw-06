const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector(".ingredients");


ingredients.forEach(Element => {
  const listNew = document.createElement("li");
  listNew.classList.add("item");
  listNew.textContent = Element;

  console.log(listNew);
  
return listNew
}
);
