const AllEl = document.querySelector('div');
console.log(AllEl);
const Decr = AllEl.firstElementChild;
console.log(Decr);
const Incr = AllEl.lastElementChild;
console.log(Incr);
let counterValue = 0;

Decr.addEventListener('click', () => {
   console.log(counterValue -= 1);

})

Incr.addEventListener('click', () => {
    console.log(counterValue += 1);
 
 })