import Form from './form.js';

const form = document.querySelector('#registration-form');
const name = form.querySelector('#name');
const phone = form.querySelector('#phone');
const region = form.querySelector('#region');
const city = form.querySelector('#city');
const anonymous = form.querySelector('#private');
const submit = form.querySelector('#submit');

if (window.innerWidth / window.innerHeight < 1) {
    form.style.width = `${window.innerWidth}px`;
}

submit.disabled = true;
submit.style.background = 'lightgray';

const registration = new Form(form, name, phone, region, city, anonymous, submit);
// name
name.addEventListener('input', () => {
    registration.validateName();
});
name.addEventListener('focus', () => {
    registration.focusName();
});
// phone
phone.addEventListener('input', () => {
    registration.validatePhone();
});
phone.addEventListener('focus', () => {
    registration.focusPhone();
});
// region
region.addEventListener('change', () => {
    registration.validateRegion();
});
// city
city.addEventListener('change', () => {
    registration.validateCity();
});
// anonymous
anonymous.addEventListener('change', () => {
    registration.setAnonymous();
});
// submit
form.addEventListener('change', () => {
    registration.enableSubmit();
});