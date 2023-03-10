const liEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${liEl.length}`);



 liEl.forEach(elem => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(elem.lastElementChild.children.length);
 })
