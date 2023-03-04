
const fontSizeControlEl = document.querySelector('#font-size-control');

const insideTextEl = document.querySelector('#text');

insideTextEl.style.fontSize = fontSizeControlEl.value + "px";

fontSizeControlEl.addEventListener('input', (event) => {
    insideTextEl.style.fontSize = event.currentTarget.value + "px";

})
