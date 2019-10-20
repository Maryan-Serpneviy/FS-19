'use strict';

const carouselNode = document.querySelector('.carousel');
const carouselPrev = carouselNode.querySelector('.carousel__btn_prev');
const carouselNext = carouselNode.querySelector('.carousel__btn_next');
const carouselDots = carouselNode.querySelectorAll('.carousel__dot');

class Carousel {
    constructor(prev, next, dots) {
        this.prev = prev;
        this.next = next;
        this.dots = dots;
        this.currIndex = 0;
    }

    prevInactive() {
        Array.prototype.forEach.call(carouselDots, dot => {
            dot.classList.remove('carousel__dot_active');
        });
    }
    
    hideCurrent() {
        this.prevInactive();
        const curr = document.getElementById(`carousel-item-${this.currIndex}`);
        curr.classList.remove('visible');
    }
    
    showNext() {
        const next = document.getElementById(`carousel-item-${this.currIndex}`);
        next.classList.add('visible');
        carouselDots[this.currIndex].classList.add('carousel__dot_active');
    }
    
    onDotClick(target) {
        if (target.classList.contains('carousel__dot_active')) { return; }
        this.hideCurrent();
        this.currIndex = target.id.slice(length - 1);
        this.showNext();
    }
    
    toggleNext() {
        if (this.currIndex >= carouselDots.length - 1) { return; }
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

    defineKey(e) {
        e.preventDefault();
        
        const PrevKey = new Set(['ArrowLeft', 'ArrowDown', 'a', 'A', 's', 'S', 'ф', 'Ф', 'ы', 'Ы', 'і', 'І']);
        const NextKey = new Set(['ArrowRight', 'ArrowUp', 'd', 'D', 'w', 'W', 'в', 'В', 'ц', 'Ц']);
    
        if (PrevKey.has(e.key)) { carousel.togglePrev(); }
        if (NextKey.has(e.key)) { carousel.toggleNext(); }
    }
}

const carousel = new Carousel(carouselPrev, carouselNext, carouselDots);

carouselNode.addEventListener('click', e => {
    if (e.target === carouselPrev) { carousel.togglePrev(); }
    if (e.target === carouselNext) { carousel.toggleNext() }
    if (e.target.classList.contains('carousel__dot')) {
        carousel.onDotClick(e.target);
    }
});

document.addEventListener('keydown', carousel.defineKey);

document.addEventListener('wheel', e => {
    e.deltaY > 0 ? carousel.toggleNext() : carousel.togglePrev();
});
