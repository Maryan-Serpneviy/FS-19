'use strict';

const gallery = document.querySelector('.gallery');
const imgContainer = gallery.querySelector('.gallery__list')
const largeImg = gallery.querySelector('#largeImg');

let currIndex = 0;

const prevInactive = () => {
    Array.prototype.forEach.call(imgContainer.children, li => {
        li.classList.remove('active');
    });
};

const toggleNextPic = () => {
    if (currIndex >= imgContainer.children.length - 1) { return; }
    prevInactive();
    currIndex++;
    const next = imgContainer.children[currIndex].querySelector('.gallery__img').src;
    imgContainer.children[currIndex].classList.add('active');
    largeImg.src = next.replace('jpeg', 'png').replace('-thumb', '');
};

const togglePrevPic = () => {
    if (currIndex <= 0) { return; }
    prevInactive();
    const prev = imgContainer.children[currIndex - 1].querySelector('.gallery__img').src;
    imgContainer.children[currIndex - 1].classList.add('active');
    largeImg.src = prev.replace('jpeg', 'png').replace('-thumb', '');
    currIndex--;
};

const defineKey = e => {
    e.preventDefault();

    const prevKeys = new Set(['ArrowLeft', 'ArrowDown', 'KeyA', 'KeyS']);
    const nextKeys = new Set(['ArrowRight', 'ArrowUp', 'KeyD', 'KeyW']);

    if (prevKeys.has(e.code)) { togglePrevPic(); }
    if (nextKeys.has(e.code)) { toggleNextPic(); }
};

imgContainer.addEventListener('click', e => {
    if (!e.target.classList.contains('gallery__img')) { return; }
    e.preventDefault();

    currIndex =  e.target.parentNode.parentNode.id.slice(length - 1);

    prevInactive();
    e.target.parentNode.parentNode.classList.add('active');
    largeImg.src = e.target.src.replace('jpeg', 'png').replace('-thumb', '');
});

document.addEventListener('keydown', defineKey);

document.addEventListener('wheel', function(e) {
    e.deltaY > 0 ? toggleNextPic() : togglePrevPic();
});