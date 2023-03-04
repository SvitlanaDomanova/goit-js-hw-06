const liEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${liEl.length}`);



 liEl.forEach(elem => {
    let itemLiEl = elem.firstElementChild.textContent;
    let ChildEl = elem.lastElementChild.children;
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(ChildEl.length);
 }

 )
