const formEl = document.querySelector('.login-form');
const emailInputEL = formEl.elements.email;
const passwordInputEL = formEl.elements.password;
const btnSubmitEl=formEl.lastElementChild;

formEl.addEventListener("submit", handleSubmitLoginForm)

function handleSubmitLoginForm (event) {
    event.preventDefault();

    if (emailInputEL.value.length === 0) {
        alert('All fields must be filled');
   
    return;
 
    }

    else if (passwordInputEL.value.length === 0) {
        alert('All fields must be filled');
   
    return;
 
    }

    const emailInputName = formEl.elements.email.name;
    const passwordInputName = formEl.elements.password.name;
    const inputData = {
        [emailInputName]: emailInputEL.value, [passwordInputName]: passwordInputEL.value,
    }
    console.log(inputData);
    event.currentTarget.reset();
}