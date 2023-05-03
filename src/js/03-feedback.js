import throttle from 'lodash.throttle';

const KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onTextareaInput, 500));
form.addEventListener('submit', onFormSubmit);

let object = JSON.parse(localStorage.getItem(KEY)) || {};
const { email, message } = form.elements;

function onTextareaInput() {
    object = {email: email.value, message: message.value};
    localStorage.setItem(KEY, JSON.stringify(object));
}

reloadPage();

function reloadPage() {
    if(object) {
        email.value = object.email || '';
        message.value = object.message || '';
    }
}

function onFormSubmit(evt) {
    evt.preventDefault();
    
    console.log({email: email.value, message: message.value});
    localStorage.removeItem(KEY);
    evt.currentTarget.reset();

    object = {};
}