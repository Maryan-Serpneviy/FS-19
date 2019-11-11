'use strict';

const form = document.querySelector('#registration-form');
const name = form.querySelector('#name');
const phone = form.querySelector('#phone');

let isValidName = false;

const Registration = {
    name: {
        isValidName: false
    }

};
// name
name.addEventListener('input', function() {
    const nameParts = this.value.trim().split(' ')
        .filter(part => part !== '')
        .map(part => part.trim());
    isValidName = nameParts.every(el => el.length >= 4);
    if (isValidName && (nameParts.length === 2 || nameParts.length === 3)) {
        this.className = 'valid';
    } else {
        this.className = 'invalid';
        isValidName = false;
    } 
});

name.addEventListener('focus', function() {
    if (isValidName) {
        this.className = 'valid';
    } else this.className = 'invalid';
});

// name.addEventListener('blur', function() {
//     if (isValidName) {
//         this.className = 'nostate';
//     }
// });

// phone
phone.addEventListener('input', function() {
    console.log(this.value)
});