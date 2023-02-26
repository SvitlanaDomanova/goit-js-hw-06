const liEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${liEl.length}`);

const liElChild = liEl.childNodes;
console.log(liElChild);

let arrs = Array.from(liEl);
console.log(arrs);
