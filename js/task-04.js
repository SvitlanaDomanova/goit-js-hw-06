const allEl = document.querySelector('div');
console.log(AllEl);
const Decr = allEl.firstElementChild;
console.log(Decr);
const incr = allEl.lastElementChild;
console.log(incr);
let counterValue = 0;

Decr.addEventListener('click', () => {
   console.log(counterValue -= 1);

})

Incr.addEventListener('click', () => {
    console.log(counterValue += 1);
 
 })