const ElSpan = document.querySelector('span');
console.log(ElSpan);
const ElInput = document.querySelector('input');
console.log(ElInput);
const ElOutput = document.querySelector('.name-output');
console.log(ElOutput);
ElSpan.textContent = 'Anonymys';

ElInput.addEventListener('input', (event) => {

    if (event.target.value === " " || event.target.value.trim(ElSpan.textContent).length === 0){
        return "Anonymys";
    }
else {
    ElSpan.textContent = event.target.value;
    return ElSpan.textContent;
}
})