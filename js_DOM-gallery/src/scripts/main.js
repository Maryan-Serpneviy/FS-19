'use strict';

const gallery = document.querySelector('.gallery');
const imgContainer = gallery.querySelector('.gallery__list')
const largeImg = gallery.querySelector('#largeImg');

imgContainer.addEventListener('click', function(e) {
    if (!e.target.classList.contains('gallery__img')) {
        return;
    }
    e.preventDefault();
    Array.prototype.forEach.call(this.children, li => {
        li.classList.remove('active');
    });
    e.target.parentNode.parentNode.classList.add('active');
    largeImg.src = e.target.src.replace('jpeg', 'png').replace('-thumb', '');
});