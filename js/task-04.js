const allEl = document.querySelector('div');
console.log(allEl);
const decr = allEl.firstElementChild;
console.log(decr);
const incr = allEl.lastElementChild;
console.log(incr);
let counterValue = 0;
const elValue = document.querySelector("#value");
console.log(elValue);

decr.addEventListener('click', () => {
   console.log(counterValue -= 1);
   elValue.textContent = counterValue;
})

incr.addEventListener('click', () => {
    console.log(counterValue += 1);
    elValue.textContent = counterValue;
 })