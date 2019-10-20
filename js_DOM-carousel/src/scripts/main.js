'use strict';

const carouselNode = document.querySelector('.carousel');
const carouselPrev = carouselNode.querySelector('.carousel__btn_prev');
const carouselNext = carouselNode.querySelector('.carousel__btn_next');
const carouselDots = carouselNode.querySelectorAll('.carousel__dot');

let currIndex = 0;

const prevInactive = () => {
    Array.prototype.forEach.call(carouselDots, dot => {
        dot.classList.remove('carousel__dot_active');
    });
};

const hideCurrent = () => {
    prevInactive();
    const curr = document.getElementById(`carousel-item-${currIndex}`);
    curr.classList.remove('visible');
};

const showNext = () => {
    const next = document.getElementById(`carousel-item-${currIndex}`);
    next.classList.add('visible');
    carouselDots[currIndex].classList.add('carousel__dot_active');
};

const onDotClick = target => {
    if (target.classList.contains('carousel__dot_active')) { return; }
    hideCurrent();
    currIndex = target.id.slice(length - 1);
    showNext();
};

const toggleNext = () => {
    if (currIndex >= carouselDots.length - 1) { return; }
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

carouselNode.addEventListener('click', e => {
    if (e.target === carouselPrev) { togglePrev(); }
    if (e.target === carouselNext) { toggleNext() }
    if (e.target.classList.contains('carousel__dot')) {
        onDotClick(e.target);
    }
});

const defineKey = e => {
    if (e.defaultPrevented) { return; }
    
    const PrevKey = new Set(['ArrowLeft', 'ArrowDown', 'a', 'A', 's', 'S', 'ф', 'Ф', 'ы', 'Ы', 'і', 'І']);
    const NextKey = new Set(['ArrowRight', 'ArrowUp', 'd', 'D', 'w', 'W', 'в', 'В', 'ц', 'Ц']);

    if (PrevKey.has(e.key)) { togglePrev(); }
    if (NextKey.has(e.key)) { toggleNext(); }
};

document.addEventListener('keydown', defineKey);

document.addEventListener('wheel', e => {
    e.deltaY > 0 ? toggleNext() : togglePrev();
});
