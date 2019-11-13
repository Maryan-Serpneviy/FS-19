'use strict';

let clicked = 0;

const counter = document.querySelector('.counter');

window.addEventListener('DOMContentLoaded', () => {
    counter.textContent = sessionStorage.getItem('counter');
    clicked = sessionStorage.getItem('counter');
});

document.addEventListener('click', () => {
    clicked++;
    counter.textContent = clicked;
    console.log(clicked);
    sessionStorage.setItem('counter', clicked);
});
