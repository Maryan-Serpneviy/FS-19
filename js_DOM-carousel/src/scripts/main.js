'use strict';

const carousel = document.querySelector('.carousel');
const carouselPrev = carousel.querySelector('.carousel__btn_prev');
const carouselNext = carousel.querySelector('.carousel__btn_next');
const carouselDots = carousel.querySelectorAll('.carousel__dot');

function Carousel(prev, next, dots) {
    this.prev = prev;
    this.next = next;
    this.dots = dots;
    let currIndex = 0;

    const hideCurrent = () => {
        Array.prototype.forEach.call(dots, dot => {
            dot.classList.remove('carousel__dot_active');
        });
        const curr = document.getElementById(`carousel-item-${currIndex}`);
        curr.classList.remove('visible');
    };
    
    const showNext = () => {
        const next = document.getElementById(`carousel-item-${currIndex}`);
        next.classList.add('visible');
        dots[currIndex].classList.add('carousel__dot_active');
    };

    const toggleNext = () => {
        if (currIndex >= dots.length - 1) { return; }
        hideCurrent();
        currIndex++;
        showNext();
    };
    
    const togglePrev = () => {
        if (currIndex <= 0) { return; }
        hideCurrent();
        currIndex--;
        showNext();
    };
    
    const onDotClick = target => {
        if (target.classList.contains('carousel__dot_active')) { return; }
        hideCurrent();
        currIndex = target.id.slice(length - 1);
        showNext();
    };

    this.onClickHandler = e => {
        if (e.target === prev) { togglePrev(); }
        if (e.target === next) { toggleNext() }
        if (e.target.classList.contains('carousel__dot')) {
            onDotClick(e.target);
        }
    };

    this.onKeyPress = e => {
        e.preventDefault();

        const prevKeys = new Set(['ArrowLeft', 'ArrowDown', 'KeyA', 'KeyS']);
        const nextKeys = new Set(['ArrowRight', 'ArrowUp', 'KeyD', 'KeyW']);        
    
        if (prevKeys.has(e.code)) { togglePrev(); }
        if (nextKeys.has(e.code)) { toggleNext(); }
    };

    this.onScroll = e => {
        e.deltaY > 0 ? toggleNext() : togglePrev();
    };
}

const twitterCards = new Carousel(carouselPrev, carouselNext, carouselDots);

carousel.addEventListener('click', twitterCards.onClickHandler)
document.addEventListener('keydown', twitterCards.onKeyPress);
document.addEventListener('wheel', twitterCards.onScroll);
