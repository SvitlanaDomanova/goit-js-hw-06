const elSpan = document.querySelector('span');
console.log(elSpan);
const elInput = document.querySelector('input');
console.log(elInput);
const elOutput = document.querySelector('.name-output');
console.log(elOutput);
elSpan.textContent = 'Anonymys';

elInput.addEventListener('input', (event) => {

    if (event.target.value === " " || event.target.value.trim(elSpan.textContent).length === 0){
        return "Anonymys";
    }
else {
    elSpan.textContent = event.target.value;
    return elSpan.textContent;
}
})