'use strict';

class Gallery {
    constructor(container, bigImage) {
        this.container = container;
        this.bigImage = bigImage;
    }

    currIndex = 0;

    prevInactive() {
        Array.prototype.forEach.call(this.container.children, li => {
            li.classList.remove('active');
        });
    }
    
    toggleNextPic() {
        if (this.currIndex >= this.container.children.length - 1) { return }
        this.prevInactive();
        this.currIndex++;
        const next = this.container.children[this.currIndex].querySelector('.gallery__img').src;
        this.container.children[this.currIndex].classList.add('active');
        this.bigImage.src = next.replace('jpeg', 'png').replace('-thumb', '');
    }
    
    togglePrevPic() {
        if (this.currIndex <= 0) { return }
        this.prevInactive();
        const prev = this.container.children[this.currIndex - 1].querySelector('.gallery__img').src;
        this.container.children[this.currIndex - 1].classList.add('active');
        this.bigImage.src = prev.replace('jpeg', 'png').replace('-thumb', '');
        this.currIndex--;
    }

    onClickHandler(e) {
        if (!e.target.classList.contains('gallery__img')) { return }
        e.preventDefault();

        this.currIndex =  e.target.parentNode.parentNode.id.slice(length - 1);

        this.prevInactive();
        e.target.parentNode.parentNode.classList.add('active');
        this.bigImage.src = e.target.src.replace('jpeg', 'png').replace('-thumb', '');
    }
    
    onKeyPress(e) {
        e.preventDefault();
    
        const prevKeys = new Set(['ArrowLeft', 'ArrowDown', 'KeyA', 'KeyS']);
        const nextKeys = new Set(['ArrowRight', 'ArrowUp', 'KeyD', 'KeyW']);
        
        if (prevKeys.has(e.code)) { this.togglePrevPic() }
        if (nextKeys.has(e.code)) { this.toggleNextPic() }
    };

    onScroll(e) {
        e.deltaY > 0 ? this.toggleNextPic() : this.togglePrevPic();
    }
}

const gallery = document.querySelector('.gallery');
const imgContainer = gallery.querySelector('.gallery__list')
const bigImg = gallery.querySelector('#largeImg');

const dayCycle = new Gallery(imgContainer, bigImg);

imgContainer.addEventListener('click', e => dayCycle.onClickHandler(e));
document.addEventListener('keydown', e => dayCycle.onKeyPress(e));
document.addEventListener('wheel', e => dayCycle.onScroll(e));