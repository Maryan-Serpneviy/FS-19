'use strict';

const carousel = document.querySelector('.carousel');
const carouselPrev = carousel.querySelector('.carousel__btn_prev');
const carouselNext = carousel.querySelector('.carousel__btn_next');
const carouselItems = carousel.querySelectorAll('.carousel__item');
const carouselDots = carousel.querySelectorAll('.carousel__dot');
const carouselItem = carousel.querySelector('.carousel__item');

let currIndex = 0;

const prevInactive = () => {
    Array.prototype.forEach.call(carouselDots, dot => {
        dot.classList.remove('carousel__dot_active');
    });
};

const hideCurrent = () => {
    const curr = document.getElementById(`carousel-item-${currIndex}`);
    curr.classList.remove('visible');
};

const showNext = () => {
    const next = document.getElementById(`carousel-item-${currIndex}`);
    next.classList.add('visible');
    carouselDots[currIndex].classList.add('carousel__dot_active');        
};

carousel.addEventListener('click', e => {
    if (e.target === carouselPrev) {
        if (currIndex <= 0) { return; }
        prevInactive();
        hideCurrent();
        currIndex--;
        showNext();
    }
    if (e.target === carouselNext) {
        if (currIndex >= carouselDots.length - 1) { return; }
        prevInactive();
        hideCurrent();
        currIndex++;
        showNext();
    }
});
