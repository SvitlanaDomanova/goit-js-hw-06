
const elInput = document.querySelector('input');
console.log(elInput);
const elStyle = document.querySelector('style');
console.log(elStyle);

elInput.addEventListener('blur', (event) => {
    let elTest = event.target.value;
    console.log(elTest);

    let elLength = elTest.length;
    console.log(elLength);
    if (event.target.value.trim(elTest).length === Number(elInput.getAttribute('data-length'))){
        event.target.classList.add("valid");
        event.target.classList.remove("invalid");
    }
else {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
}
})
