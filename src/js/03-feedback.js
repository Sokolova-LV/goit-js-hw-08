import throttle from 'lodash.throttle';

const KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onTextareaInput, 500));
form.addEventListener('submit', onFormSubmit);
populateTextarea();

let object = JSON.parse(localStorage.getItem(KEY)) || {};
const { email, message } = form.elements;

function onTextareaInput() {
    object = {email: email.value, message: message.value};
    localStorage.setItem(KEY, JSON.stringify(object));
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(KEY);

    if(savedMessage) {
        console.log(savedMessage);
        message.value = savedMessage;
    } 
}

function onFormSubmit(evt) {
    evt.preventDefault();

    const {email, message} = evt.currentTarget.elements;
    console.log({email: email.value, message: message.value});

    evt.currentTarget.reset();
    localStorage.removeItem(KEY);
}
