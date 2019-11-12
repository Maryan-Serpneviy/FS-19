import { Region } from './region.js';

const form = document.querySelector('#registration-form');
const name = form.querySelector('#name');
const phone = form.querySelector('#phone');
const region = form.querySelector('#region');
const city = form.querySelector('#city');
const anonymous = form.querySelector('#private');
const submit = form.querySelector('#submit');

let validName = false;
let validPhone = false;
let regionSelected = false;
let citySelected = false;
let isAnonymous = false;

if (window.innerWidth / window.innerHeight < 1) {
    form.style.width = `${window.innerWidth}px`;
}

// name
name.addEventListener('input', function() {
    // (\w{4,}) (\w{4,}) ?(\w{4,})?
    const nameParts = this.value.trim().split(' ')
        .filter(part => part !== '')
        .map(part => part.trim());
    validName = nameParts.every(el => el.length >= 4);
    if (validName && (nameParts.length === 2 || nameParts.length === 3)) {
        validName = true;
        this.className = 'valid';
    } else {
        validName = false;
        this.className = 'invalid';
    } 
});

name.addEventListener('focus', function() {
    validName ? this.className = 'valid' : this.className = 'invalid';
});

// phone
phone.addEventListener('input', function() {
    const mobile = /\+?(\d{2}) ?(\(|-| )?[0-9](\-| )?(\d{2})(\)|\-| )?(\-| )?(\d{3})(\-| )?(\d{2})(\-| )?(\d{2})/;
    if (this.value.match(mobile)) {
        validPhone = true;
        this.className = 'valid';
    } else {
        validPhone = false;
        this.className = 'invalid';
    }
});

phone.addEventListener('focus', function() {
    this.value = '+380 ';
    validPhone ? this.className = 'valid' : this.className = 'invalid';
});

// region
region.addEventListener('change', function() {
    if (this.value !== this.children[0].textContent &&
        this.value !== this.children[1].textContent) {

        regionSelected = true;
        this.className = 'valid';
        city.classList.remove('hidden');
        city.innerHTML = Region[this.value];
    } else if (this.value === this.children[1].textContent) {
        regionSelected = true;
        this.className = 'valid';
        city.classList.add('hidden');
    } else {
        regionSelected = false;
        this.className = 'invalid';
        city.classList.add('hidden');
    }
});

// city
city.addEventListener('change', function() {
    if (this.value !== this.children[0].textContent) {
        citySelected = true;
        this.className = 'valid'
    } else {
        citySelected = false;
        this.className = 'invalid';
    }
});

// private
anonymous.addEventListener('change', function() {
    if (!phone.disabled) {
        validPhone = true;
        phone.disabled = true;
        phone.className = 'disabled';
        phone.value = 'Not specified';
    } else {
        validPhone = false;
        phone.disabled = false;
        phone.className = 'nostate';
        phone.value = '';
    }
});

// submit
submit.disabled = true;
submit.style.background = 'lightgray';

form.addEventListener('change', function() {
    if (validName && validPhone && regionSelected && citySelected) {
        submit.disabled = false;
        submit.style = 'border: 5px solid #28a745; background: #fff';
    }    
});

