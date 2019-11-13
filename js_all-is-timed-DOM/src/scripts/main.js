'use strict';

const timer = document.querySelector('#timer');
let seconds = 0;

window.addEventListener('DOMContentLoaded', () => {
    seconds = localStorage.getItem('timeWasted');
    timer.textContent = seconds;
});

setInterval(() => {
    seconds++;
    localStorage.setItem('timeWasted', seconds);
    timer.textContent = seconds;
}, 1000);
