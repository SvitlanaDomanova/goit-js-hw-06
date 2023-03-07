
const elInput = document.querySelector('input');
console.log(elInput);
const elStyle = document.querySelector('style');
console.log(elStyle);
let noneStyle = elInput.classList.remove('validation-input.valid');
console.log(noneStyle);

elInput.addEventListener('blur', (event) => {
    let elTest = event.target.value;
    console.log(elTest);

    let elLength = elTest.length;
    console.log(elLength);
    if (event.target.value.trim(elTest).length === Number(elInput.getAttribute('data-length'))){
        event.target.style.outline = ' 3px solid green';
    }
else {
    event.target.style.outline = ' 3px solid red';
}
})
