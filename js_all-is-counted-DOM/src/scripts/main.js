'use strict';

const counter = document.querySelector('.counter');
let clicked = 0;

document.addEventListener('DOMContentLoaded', () => {
    clicked = sessionStorage.getItem('counter');
    counter.textContent = clicked;
});

document.addEventListener('click', () => {
    clicked++;
    counter.textContent = clicked;
    sessionStorage.setItem('counter', clicked);
});
