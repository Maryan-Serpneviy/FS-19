'use strict';

const gallery = document.querySelector('.gallery');
const imgContainer = gallery.querySelector('.gallery__list')
const largeImg = gallery.querySelector('#largeImg');

class Gallery {
    constructor() {
        this.currIndex = 0;
    }

    prevInactive() {
        Array.prototype.forEach.call(imgContainer.children, li => {
            li.classList.remove('active');
        });
    }
    
    toggleNextPic() {
        if (this.currIndex >= imgContainer.children.length - 1) { return; }
        this.prevInactive();
        this.currIndex++;
        const next = imgContainer.children[this.currIndex].querySelector('.gallery__img').src;
        imgContainer.children[this.currIndex].classList.add('active');
        largeImg.src = next.replace('jpeg', 'png').replace('-thumb', '');
    }
    
    togglePrevPic() {
        if (this.currIndex <= 0) { return; }
        this.prevInactive();
        const prev = imgContainer.children[this.currIndex - 1].querySelector('.gallery__img').src;
        imgContainer.children[this.currIndex - 1].classList.add('active');
        largeImg.src = prev.replace('jpeg', 'png').replace('-thumb', '');
        this.currIndex--;
    }

    onClickHandler(e) {
        if (!e.target.classList.contains('gallery__img')) { return; }
        e.preventDefault();

        this.currIndex =  e.target.parentNode.parentNode.id.slice(length - 1);

        this.prevInactive();
        e.target.parentNode.parentNode.classList.add('active');
        largeImg.src = e.target.src.replace('jpeg', 'png').replace('-thumb', '');
    }
    
    onKeyPress(e) {
        e.preventDefault();
    
        const prevKeys = new Set(['ArrowLeft', 'ArrowDown', 'KeyA', 'KeyS']);
        const nextKeys = new Set(['ArrowRight', 'ArrowUp', 'KeyD', 'KeyW']);
        
        if (prevKeys.has(e.code)) { this.togglePrevPic(); }
        if (nextKeys.has(e.code)) { this.toggleNextPic(); }
    };

    onScroll(e) {
        e.deltaY > 0 ? this.toggleNextPic() : this.togglePrevPic();
    }
}

const dayCycle = new Gallery();

imgContainer.addEventListener('click', e => dayCycle.onClickHandler(e));
document.addEventListener('keydown', e => dayCycle.onKeyPress(e));
document.addEventListener('wheel', e => dayCycle.onScroll(e));