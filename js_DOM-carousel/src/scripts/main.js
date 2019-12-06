'use strict';

class Carousel {
    constructor(prev, next, dots) {
        this.prev = prev;
        this.next = next;
        this.dots = dots;
    }

    currIndex = 0;

    hideCurrent() {
        Array.prototype.forEach.call(this.dots, dot => {
            dot.classList.remove('carousel__dot_active');
        });
        const curr = document.getElementById(`carousel-item-${this.currIndex}`);
        curr.classList.remove('visible');
    }
    
    showNext() {
        const next = document.getElementById(`carousel-item-${this.currIndex}`);
        next.classList.add('visible');
        this.dots[this.currIndex].classList.add('carousel__dot_active');
    }

    toggleNext() {
        if (this.currIndex >= this.dots.length - 1) { return }
        this.hideCurrent();
        this.currIndex++;
        this.showNext();
    }
    
    togglePrev() {
        if (this.currIndex <= 0) { return }
        this.hideCurrent();
        this.currIndex--;
        this.showNext();
    }
    
    onDotClick(target) {
        if (target.classList.contains('carousel__dot_active')) { return }
        this.hideCurrent();
        this.currIndex = target.id.slice(length - 1);
        this.showNext();
    }

    onClickHandler = event => {
        const { target } = event;
        if (target === this.prev) { this.togglePrev(); }
        if (target === this.next) { this.toggleNext() }
        if (target.classList.contains('carousel__dot')) {
            this.onDotClick(target);
        }
    };

    onKeyPress = event => {
        event.preventDefault();
        const { code } = event;

        const prevKeys = new Set(['ArrowLeft', 'ArrowDown', 'KeyA', 'KeyS']);
        const nextKeys = new Set(['ArrowRight', 'ArrowUp', 'KeyD', 'KeyW']);        
    
        if (prevKeys.has(code)) { this.togglePrev() }
        if (nextKeys.has(code)) { this.toggleNext() }
    };

    onScroll = event => {
        event.deltaY > 0 ? this.toggleNext() : this.togglePrev();
    };
}

const carousel = document.querySelector('.carousel');
const carouselPrev = carousel.querySelector('.carousel__btn_prev');
const carouselNext = carousel.querySelector('.carousel__btn_next');
const carouselDots = carousel.querySelectorAll('.carousel__dot');

const twitterCards = new Carousel(carouselPrev, carouselNext, carouselDots);

carousel.addEventListener('click', twitterCards.onClickHandler);
document.addEventListener('keydown', twitterCards.onKeyPress);
document.addEventListener('wheel', twitterCards.onScroll);
