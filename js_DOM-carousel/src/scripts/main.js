'use strict';

const carousel = document.querySelector('.carousel');
const carouselPrev = carousel.querySelector('.carousel__btn_prev');
const carouselNext = carousel.querySelector('.carousel__btn_next');
const carouselDots = carousel.querySelectorAll('.carousel__dot');

class Carousel {
    constructor(prev, next, dots) {
        this.prev = prev;
        this.next = next;
        this.dots = dots;
        this.currIndex = 0;
    }

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
        if (this.currIndex >= this.dots.length - 1) { return; }
        this.hideCurrent();
        this.currIndex++;
        this.showNext();
    }
    
    togglePrev() {
        if (this.currIndex <= 0) { return; }
        this.hideCurrent();
        this.currIndex--;
        this.showNext();
    }
    
    onDotClick(target) {
        if (target.classList.contains('carousel__dot_active')) { return; }
        this.hideCurrent();
        this.currIndex = target.id.slice(length - 1);
        this.showNext();
    }

    onClickHandler(e) {
        if (e.target === this.prev) { this.togglePrev(); }
        if (e.target === this.next) { this.toggleNext() }
        if (e.target.classList.contains('carousel__dot')) {
            this.onDotClick(e.target);
        }
    };

    onKeyPress(e) {
        e.preventDefault();

        const prevKeys = new Set(['ArrowLeft', 'ArrowDown', 'KeyA', 'KeyS']);
        const nextKeys = new Set(['ArrowRight', 'ArrowUp', 'KeyD', 'KeyW']);        
    
        if (prevKeys.has(e.code)) { this.togglePrev(); }
        if (nextKeys.has(e.code)) { this.toggleNext(); }
    };

    onScroll(e) {
        e.deltaY > 0 ? this.toggleNext() : this.togglePrev();
    };
}

const twitterCards = new Carousel(carouselPrev, carouselNext, carouselDots);

carousel.addEventListener('click', e => twitterCards.onClickHandler(e));
document.addEventListener('keydown', e => twitterCards.onKeyPress(e));
document.addEventListener('wheel', e => twitterCards.onScroll(e));
