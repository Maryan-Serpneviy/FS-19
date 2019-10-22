'use strict';

// 1
document.addEventListener('click', e => {
    // console.log(`pageX: ${e.pageX}`);
    // console.log(`pageY: ${e.pageY}`);
});

// 2
document.addEventListener('mousemove', e => {
    // console.log(`pageX: ${e.pageX}`);
    // console.log(`pageY: ${e.pageY}`);
});

// 3
document.addEventListener('mousemove', e => {
    document.addEventListener('click', () => {
        // console.log(`pageX: ${e.pageX}`);
        // console.log(`pageY: ${e.pageY}`);                
    });
});

// 4
document.addEventListener('mousedown', () => {
    // console.log('down');
});

document.addEventListener('mouseup', () => {
    // console.log('up');
});

// 5
document.addEventListener('mousemove', e => {
    document.addEventListener('mouseup', () => {
        // console.log(`pageX: ${e.pageX}`);
        // console.log(`pageY: ${e.pageY}`);                
    });
});

// 6
const moveCursorShadow = () => {
    document.addEventListener('mousedown', e => {
        e.preventDefault();
        const shadow = document.createElement('div');
        shadow.classList.add('cursor-shadow');
        document.body.append(shadow);
        shadow.style.left = `${e.pageX - 12.5}px`;
        shadow.style.top = `${e.pageY - 12.5}px`;
    
        const onMouseMove = e => {
            e.preventDefault();
            shadow.style.left = `${e.pageX - 12.5}px`;
            shadow.style.top = `${e.pageY - 12.5}px`;
        };
    
        const onMouseUp = e => {
            e.preventDefault();
            shadow.remove();
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
    
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
};
// moveCursorShadow();

// 7
const printCursorPosition = () => {
    document.addEventListener('click', e => {
        console.log(`pageX: ${e.pageX}`);
        console.log(`pageY: ${e.pageY}`);
    });    
};

// 8
const destroyElement = () => {
    document.addEventListener('click', e => {
        e.preventDefault();
        const el = document.elementFromPoint(e.pageX, e.pageY);
        console.log(el);
        el.remove();
    });    
};

// 9
const moveElement = () => {
    let currEl = null;
    let InitCoord = {
        x: 0,
        y: 0
    };
    document.addEventListener('mousedown', evt => {
        evt.preventDefault();
        let el = document.elementFromPoint(evt.pageX, evt.pageY);
        if (el !== currEl) {
            [InitCoord.x, InitCoord.y] = [0, 0];
        }
        currEl = document.elementFromPoint(evt.pageX, evt.pageY);
        
        const PageCoord = {
            x: evt.pageX,
            y: evt.pageY
        };

        const ElemCoord = {
            x: evt.offsetX,
            y: evt.offsetY
        };

        const onMouseMove = moveEvt => {
            moveEvt.preventDefault();

            const Shift = {
                x: moveEvt.pageX - PageCoord.x,
                y: moveEvt.pageY - PageCoord.y
            };

            el.style = 
            `cursor: move;
            transform: translate(
                ${InitCoord.x + Shift.x}px,
                ${InitCoord.y + Shift.y}px
            )`;
 
            // using position
            // el.style = `display: block; position: absolute;
            // left: ${PageCoord.x + Shift.x - ElemCoord.x}px;
            // top: ${PageCoord.y + Shift.y - ElemCoord.y}px;`;
        };
    
        const onMouseUp = () => {
            const transformX = Number(el.style.transform.match(/-?\d+/g)[0]);
            const transformY = Number(el.style.transform.match(/-?\d+/g)[1]);
            [InitCoord.x, InitCoord.y] = [transformX, transformY];

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
};
moveElement();