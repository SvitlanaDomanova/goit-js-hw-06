const elSpan = document.querySelector('span');
console.log(elSpan);
const elInput = document.querySelector("#name-input");
console.log(elInput);
const elOutput = document.querySelector("#name-output");
console.log(elOutput);
elSpan.textContent = 'Anonymys';

elInput.addEventListener('input', (event) => {

    if (event.target.value.trim(elSpan.textContent).length === 0 ||event.target.value.trim === 0 ){
        elSpan.textContent = "Anonymys";
        return elSpan.textContent ;
    }
else {
    elSpan.textContent = event.target.value;
    return elSpan.textContent;
}
})