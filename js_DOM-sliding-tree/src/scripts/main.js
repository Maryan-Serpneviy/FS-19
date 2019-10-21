'use strict';

const tree = document.querySelector('.tree');

tree.addEventListener('click', e => {
    Array.prototype.forEach.call(e.target.children, child => {
        child.classList.toggle('hidden');
    });
});