
const ElInput = document.querySelector('input');
console.log(ElInput);
const ElStyle = document.querySelector('style');
console.log(ElStyle);


ElInput.addEventListener('blur', (event) => {
    let ElTest = event.target.value;
    console.log(ElTest);

    let ElLength = ElTest.length;
    console.log(ElLength);
    if (event.target.value.trim(ElTest).length === Number(ElInput.getAttribute('data-length'))){
        event.target.style.outline = ' 3px solid green';
    }
else {
    event.target.style.outline = ' 3px solid red';
}
})
