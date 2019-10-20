'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');

const init = (area, target) => {
  const xMax = area.clientWidth - target.offsetWidth;
  const yMax = area.clientHeight - target.offsetHeight;

  area.addEventListener('click', e => {
    const Coord = {
      x: e.offsetX - target.offsetWidth / 2,
      y: e.offsetY - target.offsetHeight / 2,
      xMax: area.clientWidth - target.offsetWidth,
      yMax: area.clientHeight - target.offsetHeight
    };

    if (Coord.x < 0) Coord.x = 0;
    if (Coord.y < 0) Coord.y = 0;
    if (Coord.x > Coord.xMax) Coord.x = Coord.xMax;
    if (Coord.y > Coord.yMax) Coord.y = Coord.yMax;

    target.style.top = `${Coord.y}px`;
    target.style.left = `${Coord.x}px`;
  });
};

init(wall, spider);
